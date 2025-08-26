const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/recipes", view: () => console.log("Viewing Recipes") },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    
    if (!match) {
        match = {
            route: routes[0], // default set to dashboard
            isMatch: true
        };
    }
    
    console.log(match.route.view());
};

// makes it so using the back & forward buttons work
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    // makes it so the page doesn't refresh when link clicked (default behavior)
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        };
    });

    router();
});
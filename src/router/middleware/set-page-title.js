const setPageTitle = (to) => {
    const pageTitle = to.meta.title ? `${to.meta.title} | ` : '';
    document.title = pageTitle + import.meta.env.VITE_APP_TITLE;
};

export default setPageTitle;

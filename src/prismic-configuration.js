exports.linkResolver = (doc) => {
    // URL for a project type
    if (doc.type === 'project') {
        return `/projects/${doc.uid}`
    }
    // URL for about me type
    if (doc.type === 'about_me') {
        return '/about'
    }
    
    return '/'
}
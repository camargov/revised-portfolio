exports.linkResolver = (doc) => {
    // URL for a project type
    if (doc.type === 'project') {
      return `/projects/${doc.project_title}`
    }
  
    // URL for about me type
    if (doc.type === 'about_me') {
      return `/about`
    }

    // Backup for all other types
    return '/'
}
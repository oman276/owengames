export type Project = {
    /** URL slug of the project, used in the URL and as the name of the project file */
    slug: string;
    /** Full project title */
    title: string;
    /* OpenGraph description */
    preview: string;
    /** Keywords of the project, used in OpenGraph metadata */
    tags: string[];
    /** the type of project (e.g. game, etc, etc.) */
    type: string;
    /* Publication date, the end date if nothing else is specified */
    date: string;
    /** Date to display for the project (initial date is for sorting) */
    displayedDate?: string;
    /** Full markdown-formatted content of the post */
    content: string;
    /** File location of an image for display on the post's page */
    coverImage?: string;
    /** image urls of images to show in the gallery of this project */
    galleryImages?: string[];
    /** main interaction button url */
    actionURL?: string;
    /** main interaction button text */
    actionText?: string;
};

export type GameProject = Project & {
    /** URL of the game's page on a platform (e.g. itch.io, Steam) */
    playURL?: string;
    /** URL of the game's source code repository */
    sourceURL?: string;
};

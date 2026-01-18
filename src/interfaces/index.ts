export interface getBlogs {
    excerpt: string;
    id: string;
    slug: string;
    title: string;
    createdAt: Date;
    image: {
        url: string;
    };
    categories: {
        label: string;
        slug: string;
    };
    author: {
        name: string;
        avatar: {
            url: string;
        };
    };
    description: {
        text: string;
    };
}

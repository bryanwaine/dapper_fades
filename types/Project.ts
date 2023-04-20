import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    image: string;
    alt: string;
    price: number;
    duration: number;
    content: PortableTextBlock[];
}
import PostPreview from "@/components/ui/post-preview"

const SECTION = 'voidheart';

export const metadata = {
    title: 'Voidheart',
    description: 'Generated by create next app',
}

export default function Page() {
    return <PostPreview group={SECTION} />
}
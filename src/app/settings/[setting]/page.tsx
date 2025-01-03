//@typescript-eslint/no-explicit-any

export default async function Page({ params }: any) {

    const { setting } = await params;
    return (
        <div className="flex flex-col justify-center items-center h-full gap-4">
            <div className="text-muted-foreground">
                dummy Setting page content:
            </div>
            <div className="ml-2 uppercase  text-lg">
                {setting} page
            </div>
        </div>
    );
}
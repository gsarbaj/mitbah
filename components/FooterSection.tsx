// @ts-ignore
export default function FooterSection ({children, title}: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className={'m-4'}>
            <div className={'antialiased text-xl font-semibold mb-2'}><h4>{title}</h4></div>
            <div className={'flex flex-col'}>{children}</div>
        </div>
    );
};

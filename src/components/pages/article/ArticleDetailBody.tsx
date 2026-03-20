import Image from "next/image";

const bodyText1a = `Commodo sodales at eget id dignissim amet consectetur adipiscing elit. At cursus magna libero turpis scelerisque tristique scelerisque mi. Sed nunc auctor faucibus vitae. Gravida erat nisi sed vulputate sed cum viverra enim pretium. Sed nunc consequat, tincidunt pharetra. Mattis quis egestas mi, malesuada morbi morbi porttitor porttitor. Faucibus nunc, turpis malesuada blandit feugiat porttitor feugiat pellentesque condimentum. At nisi, cursus sem blandit sed nunc phasellus. Placerat auctor tincidunt commodo auctor placerat viverra tortor quis eu. Pretium velit eu, massa tristique congue egestas. In arcu tellus tellus urna, orci gravida etiam velit, viverra. Convallis nunc sed tellus eget feugiat ultricies purus. Consectetur sollicitudin id eget facilisis hendrerit nibh.`;
const bodyText1b = `Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci. Sed vitae quam vel pretium urna, duis neque. Vitae commodo interdum adipiscing mi ultrices. Aliquam risus nibh tincidunt mauris faucibus gravida eleifend.`;
const bodyText2 = `Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere. Lectus tellus montes, ac sed diam. Habitant amet, leo cras dui ac eu magna. Sed neque lorem mi laoreet orci aliquam maecenas.`;
const bodyText3 = `Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare.`;
const bodyText4 = `Praesent tempus vel urna suspendisse cursus. Ac proin vitae viverra lorem nulla mattis in. Urna diam accumsan quisque adipiscing sagittis, in. Adipiscing dolor, morbi placerat sit vitae ipsum amet consequat.`;

export default function ArticleDetailBody() {
    return (
        <>
            <section className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-sm text-muted-foreground leading-relaxed">
                        <p className="mb-4">{bodyText1a}</p>
                        <p className="mt-9">{bodyText1b}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">{bodyText2}</p>
                        <div className="relative w-full h-56 md:h-72">
                            <Image
                                src="/assets/img/Rectangle 58.png"
                                alt="interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div>
                        <h2 className="text-foreground text-lg md:text-xl font-semibold mb-3">
                            Bedroom Collection
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">{bodyText3}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-10">{bodyText4}</p>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 md:px-10 my-12">
                <div className="relative w-full h-64 md:h-105">
                    <Image
                        src="/assets/img/Rectangle 59.png"
                        alt="bedroom"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </div>

            <section className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-foreground text-lg md:text-xl font-semibold mb-3">
                            The Knot
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">{bodyText3}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-10">{bodyText4}</p>
                </div>
            </section>
        </>
    );
}

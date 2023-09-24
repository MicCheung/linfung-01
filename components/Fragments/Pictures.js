
import Image from 'next/image';

export const Picture01 = ({section}) => {

    return (
        <Image
          src={section.src}
          width={section.width}
          height={section.height}
          alt={section.alt}
          className="focus:border-none active:border-none"
        />
    );
}

import Button from "./Button";
export default function CircleButton({
  src,
  className,
  onClick,
  imageClassName,
}) {
  return (
    <Button
      className={
        "flex text-white gap-2 justify-center items-center py-4 md:px-4 rounded-full hover:scale-105 animation-all duration-300 " +
        className
      }
      handler={onClick}
    >
      <img
        alt=""
        src={src}
        className={"invert " + (imageClassName ?? "")}
      ></img>
    </Button>
  );
}

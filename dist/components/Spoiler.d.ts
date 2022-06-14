/// <reference types="react" />
interface ISpoiler {
    children?: JSX.Element | JSX.Element[];
    width?: string | number;
    height?: string | number;
    isActive?: boolean;
}
export default function Spoiler(props: ISpoiler): JSX.Element;
export {};



export enum SelectedPageEnum {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}


export interface BenifitsType {
  setSelectedPage: (value: SelectedPageEnum) => void;
  icon: JSX.Element;
  title: string;
  paragraph: string;
}

export interface ClassesType {
  name: string;
  description?: string;
  image: string;
}
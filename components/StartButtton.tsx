import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";



export function AnimatedSubscribeButtonDemo() {
    
  return (
    <AnimatedSubscribeButton
      buttonColor="#000000"
      buttonTextColor="#000000"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          Get Started{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          Subscribed{" "}
        </span>
      }
    />
  );
}

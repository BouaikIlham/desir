'use client'
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
interface UserProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
const User: React.FC<UserProps> = ({
  title="You are not authorized",
  subtitle="Only for admin"
}) => {
  const router = useRouter()
  return ( 
    <div
        className="h-[60vh]
                   flex
                   flex-col
                   gap-2
                   justify-center
                   items-center" >
        <Heading
            center
            title={title}
            subtitle={subtitle}
        />
        <div className="w-48 mt-4">
 
                <Button
                    outline
                    label={"Back to  home page"}
                    onClick={() => router.push('/')}
                />
        </div>
    </div> 
);
}


export default User;
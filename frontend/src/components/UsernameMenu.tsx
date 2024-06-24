import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const UsernameMenu = () => {

    const { user, logout } = useAuth0();
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-center">
            <CircleUserRound className="text-orange-500"/>
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
            </Link>
            </DropdownMenuItem>   
            <Separator />
            <DropdownMenuItem>
                <Button className="flex flex-1 font-bold bg-orange-500"
                onClick={()=>logout()} >
                    Logout</Button>
            </DropdownMenuItem> 
            
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;
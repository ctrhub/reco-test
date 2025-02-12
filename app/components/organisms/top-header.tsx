import { LucideOrigami } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Link } from "@tanstack/react-router";
import { Container } from "../atoms/containter";

function HeaderMenu() {
	return (
		<nav>
			<ul className="flex gap-8">
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>About</li>
			</ul>
		</nav>
	)
}

function HeaderUser() {
	return (
		<Avatar className="w-10 h-10">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="object-cover" />
      <AvatarFallback>UA</AvatarFallback>
    </Avatar>
	)
}

export function TopHeader() {
	return (
		<Container asChild>
			<header className="flex justify-between items-center border ring-1 ring-muted md:px-4 py-2 rounded-2xl mt-2">
				<LucideOrigami />
				<HeaderMenu />
				<HeaderUser />
			</header>
		</Container>
	)
}
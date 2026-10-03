import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const languages = [
		{ code: "en", label: "English" },
		{ code: "zh", label: "中文" },
	];

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="relative">
					<Languages className="size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" side="right" className="w-40">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
						className={i18n.language === lang.code ? "bg-accent" : ""}
					>
						{lang.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

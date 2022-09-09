import { Header } from "../../components/Header";

const user = {
  name: "Matheus Xavier",
  image:
    "https://avatars.githubusercontent.com/u/82738108?v=4",
};

const tabs = [
	"Home", "Orders", "Education", "Community", "Forums", "Support", "Account", "Helpdesk"
]

export function Home() {
  return <Header user={user} tabs={tabs} />;
}

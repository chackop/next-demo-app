import Link from "next/link";
import Layout from "../../components/Layout";
import contacts from "../api/contacts";

export default function Contacts() {
  return (
    <Layout>
      <ul>
        {contacts.map((contact) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li>
              <Link href={`contacts/${contact.id}`}>
                <a>{contact.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

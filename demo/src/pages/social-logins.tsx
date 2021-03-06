/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, navigate } from "gatsby";
import { useAuth, SocialLogins } from "gatsby-theme-firebase";
import Button from "gatsby-theme-firebase/src/components/Button";
import { A, Code, CodeBlock, Header } from "../components/Styles";
import { Layout } from "../components";

const SocialLoginsPage = () => {
  const { isLoading, isLoggedIn } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      <Header title="Social Login" isLoggedIn={isLoggedIn} />

      <p sx={{ mt: 3, mb: 2 }}>
        Only want the social login buttons and don{"'"}t need the full login
        form?
      </p>

      <p sx={{ mb: 2 }}>
        Use the{" "}
        <A
          href="https://github.com/epilande/gatsby-theme-firebase/blob/master/gatsby-theme-firebase/src/components/SocialLogins.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code>{`<SocialLogins />`}</Code>
        </A>{" "}
        component:
      </p>

      <CodeBlock
        link={
          "https://github.com/epilande/gatsby-theme-firebase/blob/master/demo/src/pages/social-logins.tsx"
        }
        title="social-logins.tsx"
      >
        {`import { SocialLogins } from "gatsby-theme-firebase";

...

<SocialLogins
  onSuccess={(user) => {
    doSomethingWith(user)
  }}
/>
`}
      </CodeBlock>

      <h2 sx={{ mb: 3 }}>Demo</h2>

      <div sx={{ maxWidth: "20rem", mb: 3 }}>
        <SocialLogins
          onSuccess={user => {
            console.log("SocialLogins user: ", user);
            navigate("/");
          }}
        />
      </div>

      <Link sx={{ mr: 3 }} to="/">
        <Button>Back</Button>
      </Link>
      <Link sx={{ mr: 3 }} to="/login">
        <Button>Login Page</Button>
      </Link>
    </Layout>
  );
};

export default SocialLoginsPage;

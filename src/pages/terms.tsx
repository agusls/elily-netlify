import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { ShareList } from "../components/ShareList";
import config from "../lib/config";
import Copyright from "../components/Copyright";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Terms <span className="fancy">{config.site_title}</span>
          </h1>
          <span className="handle"></span>

          <p></p>

          <p></p>

          <p>Untuk menghubungi tim kami, Anda dapat mengirimkan surat elektronik ke alamat
            teknosia.netlify[at]gmail.com.</p>

          <ShareList url={`/`} text={config.site_title} />
        </div>

        <footer>
          <Copyright />
        </footer>

      </div>
      <style jsx>
        {`
            .container {
              display: block;
              max-width: 36rem;
              width: 100%;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
              z-index: 0;
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
            }
            article {
              flex: 1 0 auto;
            }
            h1 {
              margin: 0 0 0.5rem;
              font-size: 2.25rem;
            }
            .tag-list {
              list-style: none;
              text-align: right;
              margin: 1.75rem 0 0 0;
              padding: 0;
            }
            .tag-list li {
              display: inline-block;
              margin-left: 0.5rem;
            }
            .social-list,
            .share-list {
              margin-top: 1rem;
              text-align: center;
              margin-bottom: 3rem;
            }
            @media (min-width: 769px) {
              .container {
                display: flex;
                flex-direction: column;
              }
            }
          `}
      </style>
    </Layout>
  );
}

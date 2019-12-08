import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

export const PureSidebar = ({ data, isIndex }) => {
  const {
    author,
    copyright,
    menu
  } = data.site.siteMetadata;

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <p>
          Subscribe to my{' '}
          <a href="https://tinyletter.com/tigranh" target="_blank">
            newsletter
          </a>
        </p>
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <br></br>
        <div>
          <script
            async
            type="text/javascript"
            src="//cdn.carbonads.com/carbon.js?serve=CE7DK53M&placement=tikdev"
            id="_carbonads_js"
          ></script>
        </div>
      </div>
    </div>
  );
};

export const Sidebar = (props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
              contacts {
                twitter
                telegram
                github
                email
                rss
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureSidebar {...props} data={data}/>}
  />
);

export default Sidebar;

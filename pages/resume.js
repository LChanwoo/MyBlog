import Link from 'next/link';
import 'nextra-theme-blog/style.css'
import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
export async function getStaticProps() {
    const NOTION_PAGE_ID = '160bea0ed31b4f53b1a497d5252906cb';
    const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`
    ).then(res => res.json());
    return {
        props: {
            blockMap: data
        }
    };
}

export default ({ blockMap })=>{
    const YEAR = new Date().getFullYear();
    return (
            <article class="container prose prose-sm md:prose dark:prose-dark">
                <h1>Aldrich's Portfolio Blog</h1>
                <div class="nav-line">
                    <a class="nav-link" href="/">About</a>
                    <a class="nav-link" href="/posts">Posts</a>
                    <a class="nav-link" href="/portfolios">Portfolios</a>
                </div>
                <div>
                    <h1>이력서</h1>        
                    <NotionRenderer blockMap={blockMap} fullPage={false}/>  
                </div>

                <small style={{display:"block",marginTop:"8rem"}}>
                    <time >{YEAR} </time>
                      © Aldrich Lee.
                    <a href="/resume">Resume</a>
                    <style jsx>{`
                        a {
                        float: right;
                        }
                        @media screen and (max-width: 480px) {
                        article {
                            padding-top: 2rem;
                            padding-bottom: 4rem;
                        }
                        }
                    `}</style>
                </small>
            </article>

    )
};
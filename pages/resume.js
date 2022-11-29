import Link from 'next/link';
import 'nextra-theme-blog/style.css'
import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';


function Resume(){
    const [response, setResponse] = useState({});

    const YEAR = new Date().getFullYear()
    useEffect(async () => {
        const NOTION_PAGE_ID = '160bea0ed31b4f53b1a497d5252906cb';
        await fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
          .then(res => res.json())
          .then((resJson) => {
            setResponse(resJson);
          });
      }, [])
    return (
            <article class="container prose prose-sm md:prose dark:prose-dark">
                <h1>Aldrich's Portfolio Blog</h1>
                <div class="nav-line">
                    <a class="nav-link" href="/">About</a>
                    <a class="nav-link" href="/posts">Posts</a>
                    <a class="nav-link" href="/portfolios">Portfolios</a>
                    <Link href={"/resume"} ><span class="nav-link">Resume</span></Link>
                </div>
                <div>        
                    <NotionRenderer blockMap={response} fullPage={true}/>  
                </div>

                <small style={{display:"block",marginTop:"8rem"}}>
                    <time >{YEAR} </time>
                      © Aldrich Lee.
                </small>
            </article>

    )
}
export default Resume;
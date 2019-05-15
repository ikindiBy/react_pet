import NextHead from 'next/head';

const Head = ( props ) =>  {
    const defaultDescription = "initial-scale=1.0, width=device-width";
    const defaultTitile = 'FilmsSearcher';

      return (
          <NextHead>
              <meta charSet="UTF-8"/>
              <title>{props.title || defaultTitile}</title>
              <meta name="viewport" content={props.description || defaultDescription}/>
          </NextHead>
      );
  };
  
  export default Head;
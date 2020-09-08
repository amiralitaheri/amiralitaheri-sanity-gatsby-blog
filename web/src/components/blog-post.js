import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj, cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import PostFooter from './postFooter'


import styles from './blog-post.module.css'
import CommentSection from "./CommentSection";

function BlogPost(props) {
  const {id, _rawBody, authors, tags, title, mainImage, publishedAt, language} = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={cn(styles.mainContent, language === 'fa' && 'fa')}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody}/>}
            <PostFooter tags={tags}/>
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors'/>}
            {tags && (
              <div className={styles.tags}>
                <h3 className={styles.tagsHeadline}>Tags</h3>
                <ul>
                  {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <CommentSection language={language} postId={id}/>
      </Container>
    </article>
  )
}

export default BlogPost

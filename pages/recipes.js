import Nav from '../components/navbar'
import Layout from '../components/layout'

import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <selection className={styles.container}>
      <h1 className={styles.title}>
        Recipes
      </h1>
      <p>This will have the recipies or blogs</p>
    </selection>
  )
}

Home.getLayout = function getLayout(page) {
  return(
    <Layout>
      <Nav />
      {page}
    </Layout>
  )
}

import React, { useEffect, useState } from 'react'
import styles from '../Css/projects.module.css'
import ProjectHeader from './ProjectComponents/ProjectHeader'
import Categories from './ProjectComponents/Categories'
import SingleProject from './ProjectComponents/SingleProject'

function Projects() {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  // const [activeIndex, setActiveIndex] = useState(0)
  const [selectedValue,setSelectedValue] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState([])
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch('/resumeData.json')
      fetchData.json().then((data) => setData(data))
    }

    getData()
  }, [])
  useEffect(() => {
    const projectCategoryButton = data?.projects?.reduce(
      (values, item) => {
        if (!values?.includes(item.category)) {
          values.push(item.category)
        }
        return values
      },
      ['all']
    )
    setCategories(projectCategoryButton)
    setFilteredProjects(data)
  }, [data])
console.log(selectedValue);
  const handleChange= (value) => {
    setSelectedValue(value)
    const menuCategory = data?.projects?.filter((dat) => {
      if (dat?.category === value) return dat
    })
    return value === 'all'
      ? setFilteredProjects(data)
      : setFilteredProjects({ projects: menuCategory })
  }
  console.log(filteredProjects)

  return (
    <section className={styles.projects} id='projects'>
      <ProjectHeader />
      <div className={styles.project__main}>
        <Categories
          categories={categories}
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
        <div className={styles.project__list}>
          {filteredProjects?.projects?.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import React from 'react'
import ProjectItem from '../../../component/ProjectItem'

export default function ProjectList() {
    return (
         <div className="list row">
             <ProjectItem
                img= 'img/project/project (1).jpg'
                title='furnitown'
                makeby='Hoàn thành với Trần Nghĩa'
             />
             <ProjectItem/>
             <ProjectItem/>
             <ProjectItem/>
             <ProjectItem/>
             <ProjectItem/>
             <ProjectItem/>
             <ProjectItem/>
             <ProjectItem/>
         </div>
    )
}

import React from 'react'
import styled from 'styled-components'
import SkillBar from './skill-bar'

export default styled(({ className, title = 'Skills', skills = [] }) => (
  <div className={className}>
    <h1>{title}</h1>
    {skills.map(skill => (
      <li key={skill.name}>{skill.name}</li>
    ))}
  </div>
))`
  // width: 100%;
`

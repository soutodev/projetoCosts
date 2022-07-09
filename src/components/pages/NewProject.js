import React from "react";
import ProjectForm from "../project/ProjectForm";
import styles from './NewProject.module.css';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o projeto para depois adicionar os serviços.</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    );
}

export default NewProject;
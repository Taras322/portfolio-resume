import React from 'react';

const Skills = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Skills</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, BootStrap</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>MySQL, MongoDB</p>
                        </li>
                    </ul>

                </div>
            </main>
        </div>
    );
};

export default Skills;
import React from "react";
import CollapseWrapper from "../common/collapse";

const Res = ({children}) => {
    return (
        <ol>
            {React.Children.map(children, (el) => {
                return <li>{React.cloneElement(el)}</li>;
            })}
        </ol>
    );
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Res>
                <Component/>
                <Component/>
                <Component/>
            </Res>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;

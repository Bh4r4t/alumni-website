import './auth.component.css';

function Auth({ children }: any) {
    return (
        <div className="auth-view">
            <div className="auth-container-wrapper">
                <div className="auth-container">{children}</div>
            </div>
        </div>
    );
}

export function Logo() {
    return <div className="auth-logo">IIT-RPR Alumni</div>;
}

export function HRBreak() {
    return (
        <>
            <div className="left-hr"></div>
            <div className="or-text">OR</div>
            <div className="right-hr"></div>
        </>
    );
}

export function HR() {
    return <div className="hr"></div>;
}

export default Auth;

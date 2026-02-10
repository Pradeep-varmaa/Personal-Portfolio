import Link from "next/link";
import { Button } from "antd";

export default function NotFound() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">
                <Button style={styles.button}>Go to Home</Button>
            </Link>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: "72px",
        marginBottom: "10px",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        cursor: "pointer",
    },
};

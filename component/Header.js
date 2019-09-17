import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Header = () => (
    <div>
        <Link href="index">
            <a>index</a>
        </Link>
        <Link href="test">
            <a>test</a>
        </Link>
    </div>
)

Header.getInitialProps = async function() {
    const res = await fetch('http://129.226.132.86:8888');
    const json = await res.json();
    console.log(json);

    return {
        msg: json
    }
}

export default Header;
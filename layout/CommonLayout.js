import Header from '../component/Header'

const style = {
    margin: 20,
    padding: 20,
    border: '1px solid #CCCCFF',
}

const CommonLayout = Content => {
    return () => (
        <div style={style}>
            <Header/>
            <Content/>
        </div>
    );    
}

export default CommonLayout;
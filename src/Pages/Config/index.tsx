import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Form from "../../components/Form/Form"
import List from "../../components/List"

const Config: React.FC = () => {
    return(
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Form/>
                <List/>
                <Footer/>
            </section>
        </Card>
    )
}

export default Config
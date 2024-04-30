import { Posts } from './Posts.jsx'
import '../../styles/D1-content.css'

export const Content = () => {
    return (
        <main>
            <div className="content">
                <section>
                    <Posts/>
                </section>
            </div>
        </main>
    )
}
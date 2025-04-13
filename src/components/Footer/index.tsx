import Container from "../Container";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
   return (
      <footer className="bg-primary text-white py-6">
         <Container>
            <div className="flex justify-between">
               <Link to={"/"}>
                  <img
                     src="/common/LogoFooter.svg"
                     className="w-[4rem]"
                     alt="Logo Cargocor"
                  />
               </Link>
               <div className="flex items-center gap-2">
                  <Link to="/nosotros">
                     <Button variant="link" className="text-white">
                        Nosotros
                     </Button>
                  </Link>
                  <Link to="/productos">
                     <Button variant="link" className="text-white">
                        Productos
                     </Button>
                  </Link>
                  <Link to="/contacto">
                     <Button variant="link" className="text-white">
                        Contacto
                     </Button>
                  </Link>
               </div>
               <div className="flex items-center gap-2">
                  <img
                     className="w-6"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXJJREFUaEPtWVEOgzAIhZvNk2072bxZJ0YTW1vbUtBq6I+Jqch7Dwoows0X3tx/MABXK2gKmAKNDDwzhJxzLwB4AwBde1hfRPzEHIkq4JxzPXgd8WFAxHF7fwdg8p2QEvs9rhERhxyAXtmf/cYplu4EgMLFy8NqAPTARWE1J26YjywAJNmJIIh1cn5OVjEAa9wpA9kdl+IAlNTwWN8maTOARc5oERFSI1mkloL6804d5il09BJu3UiyfqRydRIH1UwKSI71ZBvTCoDwtIBgsS4RQrG2ohYIm3UtAKVqNLOuCWC1nWQ31RFyW3aJHEj5VAyi5fjVBJBVg8v6GSEUqhJrCbj1wrN9hgLbF36ndpiSWGw8PRuA+FRnAMQprTRoClQSJr7dFBCntNKgKVBJmPj2EgVoBu3lo262RYl9GyXnvUFanEamwZB9MpP8P9DS8jL9O3osORQ98weHAoNqJk0BNWoLDZsChUSpbTMF1KgtNPwHIw8CQNQVVAUAAAAASUVORK5CYII="
                  />
                  <img
                     className="w-6"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASpJREFUaEPtWW0OgjAMbU+mnEw9mXiy6hJICGuXwcjaxbc//BDD3kdfm5Rp8MOD358AwFtBKBBWARG5E9GDiNLT88xE9GLm9MyOaSEReQe4/HrhmZmnowDEk/b9t5lZJbukAABcqWA0BbYF+dkBTcGRF2sgC6VEeVrqiEj6LQMRRYHJisMVUGQAReajAzBzfG+lqAqY7C8df9vtb1oD9a4BFYDFdsQUUotXfghqe4W3AhmAxTpp3qo6AFBFk/3SUApoc3s2zyvps8J3T6GqhlUYJdTC7lkDAODdB04rUIrWISxU6sw9AWgOGCpGAcC7iKEAFEgMHJnVKwY9pBD6QIVNSq/AQn9poSsXHK0WOrXguHLF1ALg3IqpsWi7/R1r1m5UGx+CAlCgkYEvIhAvQCPb1FIAAAAASUVORK5CYII="
                  />
                  <img
                     className="w-6"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAr5JREFUaEPtWT1rFUEUPUfBRrAUBEFEECSVWAmKplGstLLU+A9SiIUImsJKBP+B2lpZaCnGziqViI3EkFKshJRed5bdx7x5mZl7Nzu7WXjThMDszDn3nvsx9xETX5w4fiwJjO3BpQcm5wERud6Adn+vAWj/78plE8AX9zHJZ9ZDTBISkc89AM5h3LAQURForO7AD7lURLIERMS59emQyL27Vkk6iUWXhoCMBL6+lpWeOhMY2fot7qSUkuykYjCA9TeqxOBk4rJZTKpRKUUJDGT9Oesm7hyNgB+A+9ULLYGojEp4YLUJvoXssY+FN0nW+91KeGBuny/rFAGr/qOXhHEUAG0rcaqqFyew4GIROQLgTAN+h+Q/n4g1xmLptA8PhDo+B2ANwF0A5xvQPwC8A/CG5LZCMgvJrxgB/2ARuQ3gIYArkfTr5PKS5AePhEqqpQjMrC8iZwG8BXA1UztcT3Wf5G4mcOeOKUVglp+Nmn5C8nlDwKXXbKNYhEAgn28AVpSVe4vkJYuMShCYpTYROV0F7i8AR5UE9kge9whk3xlDEPgJ4JiSwF+SJ8YmMNfqisgWgItKAl9JXh5bQu5+P4gfA6gDU7EeVRJ6MXoQuza47WVE5FRVeV8DuJkh8BHAA5K/D0MaDb1wA8A6gFsREq6AvSL5ySIft7dEELcYwo7yJIB7AO4AuOCazKqt+A7gvSt0JP8cqlaiAaOaIPheMRa+Th7I5uZAJl3baUXMd5OQlUALpH7jhuOQZraUevemiAz6IguBtA92laUjmzoRUDVZB0Fl+HbaBFLDrdxcaMyx4iymUsNezWixazAbFBLfeqDRoqVX6QXt4iHZ+pL1gKVf6ZlEdjJdtxiWS63V03K2t1ddEM0EvB7Gpdi+f2KqJ3m53wNCo5g80NGiRT9bEihqXsXhSw8ojFR0y+Q98B+3YFxARYgyygAAAABJRU5ErkJggg=="
                  />
                  <img
                     className="w-6"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAW9JREFUaEPtWVsSwjAIhJOpJ1NPpj0ZSidxYgvpQyrJDPnJR9uEZSFsCULnAzu3HwKAN4PBQLMMENEZAK4AwLPneALAHRF5ng01hIjo0YDx2eAnIl62AiBPt0/3RkTR2TUGAoAlg5YMcELd2Dgi4pkT/fBhBeBjfLb4XyBMAGiL0BvF0RQEgOThy7SgdBVCCUSZxFylueAdPkxC6HArKxsEgOQcFlSD4KiyFtyF56ekq0Zhxs85l5JgzGKxWk+sGJCS+CsPpI2SMBxyAZQiZekw8AZw1uRwCaYGwhXAluTXimIzADjua2xo/yHuAITwmOmqmkB0BZBOm1nBUxJeLI7eADTZvXiq5fwJABUxt7YOSN2NbhjQOhwBYGtXYtFjFSkRIWTR2AoGJl5cdEgrdaCZU4h/RqZd4tzFzs6SmrBal3vNeuO6VpV4izI2fTcAmLpzx2J7GOj+gqPvK6YdLLt8EtesLm4vNg0GgoEfPfACltKYQLVENYkAAAAASUVORK5CYII="
                  />
               </div>
            </div>
         </Container>
      </footer>
   );
};
export default Footer;

import Layout from "../../components/Main";

export default function Home() {
  return (
    <Layout>
      <div className='mainx justify-start'>
        <p className='mt-10'>
          „Като влезете в нашето приложение, като използвате своя акаунт в
          Google или Facebook (наричан тук „Доставчик за единично влизане“), вие
          се съгласявате, че можем да използваме потребителското име, свързано с
          вашия имейл доставчик, като ваше потребителско име в нашето
          приложение. Това потребителско име ще се показва публично на други
          потребители и ще се използва, за да ви идентифицира и да проследява
          дейността ви в нашето приложение. Можете да промените потребителското
          си име по всяко време, като влезете в секцията „Профил“ на нашето
          приложение.
          <br />
          Като влезете в нашето приложение с помощта на вашия доставчик на
          единично влизане, вие също се съгласявате да получавате имейли от нас
          относно вашата дейност и маркетингова информация. Можете да се
          откажете от получаването на тези имейли по всяко време, като влезете в
          секцията „Профил“ на нашето приложение и актуализирате вашите
          предпочитания за имейл.
        </p>
      </div>
    </Layout>
  );
}

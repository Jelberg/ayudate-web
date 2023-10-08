export default function (props) {
  const {module, topic} = props;

  const transcription = (m, t) => {
    const module = parseInt(m);
    const topic = parseInt(t);
    if (module === 1) {
      switch (topic) {
        case 1:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  Tema 1: Alimentación y nutrición. Qué es, su diferencia e
                  importancia
                </p>{' '}
                {'\n'}
                {'\n'}
                Empezamos por aclarar dos términos, que aunque se utilizan de
                manera intercambiable, tienen diferencias importantes. Estos
                términos son alimentación y nutrición.
              </p>
              <p>
                {'\n'}
                La alimentación es un proceso voluntario y tú decides si quieres
                alimentarte o no. Este proceso incluye desde el momento en que
                se prepara el alimento hasta el momento en que lo consumimos.
                {'\n'}Fíjate que interesante, la alimentación está vinculada
                directamente con el alimento, la nutrición en cambio, es un
                proceso diferente, en principio es involuntario, es decir,
                nosotros no decidimos qué hace nuestro cuerpo con los alimentos.
              </p>
              <p>
                {'\n'}
                La nutrición se compone de una serie de procesos, en donde
                podemos hablar de la digestión, la absorción de los alimentos y
                también, de su aprovechamiento final que ocurre en un proceso
                llamado metabolismo. La nutrición está vinculada con los
                nutrientes, es decir, con las sustancias químicas que están
                contenidas dentro del alimento y que son importantes para que tu
                cuerpo pueda realizar todas sus funciones y te encuentres
                saludable. De manera que, alimentación y nutrición, si bien son
                procesos que van de la mano, no necesariamente son procesos
                iguales.
              </p>
              <p>
                {'\n'}
                En tu alimentación puedes hacer una buena selección de
                alimentos, seleccionar alimentos nutritivos y procesarlos
                correctamente, sin embargo, si el proceso de nutrición está
                comprometido el aprovechamiento de los alimentos ocurrirá de
                manera saludable, por lo que esos alimentos que te esforzaste en
                escoger bien, no van a ser bien aprovechados. {'\n'}Es muy
                importante que cuidas tu salud en todos los sentidos, porque la
                presencia de algunas enfermedades puede comprometer tu proceso
                de nutrición. {'\n'}De igual manera es muy importante que cuides
                la alimentación, ese proceso en el que seleccionas y procesas
                los alimentos, ya que si esto no lo haces de manera correcta
                también puedes al final comprometer el proceso de nutrición.{' '}
                {'\n'}La alimentación es muy importante y debe componerse de
                alimentos variados, de esta manera vas a obtener diferentes
                tipos de nutrientes. {'\n'}Recuerda que, los nutrientes son
                sustancias químicas que están dentro del alimento y que son muy
                importantes para las funciones de tu cuerpo; pero debes tener
                diferentes tipos de nutrientes para que esto pueda suceder.
              </p>
              <p>
                {'\n'}
                Por esa razón, es muy importante que entiendas que los
                nutrientes se clasifican en macronutrientes, que son los que
                necesitamos en más cantidad y en micronutrientes, que son los
                que necesitamos en cantidades más pequeñas. {'\n'}
                {'\n'}Ojo, esto no significa que los micronutrientes sean menos
                importantes que los macronutrientes, ambos son sumamente
                importantes. {'\n'}
                {'\n'}¿Cuáles son estos nutrientes? Dentro de los
                macronutrientes, se encuentran los carbohidratos, las proteínas
                y las grasas. Estos tres nutrientes son sumamente importantes,
                los tres nutrientes son fuente de energía, sin embargo, tienen
                funciones muy distintas entre unos y otros. {'\n'}Los
                carbohidratos, son la fuente de energía principal, la gasolina
                para tu cuerpo. {'\n'}
                De manera que son sumamente importantes para las funciones
                orgánicas. {'\n'}Las proteínas, tienen una función más bien
                estructural, y además forman parte importantísima de tu sistema
                inmunológico. Por esa razón, siempre deben estar presentes en tu
                alimentación, alimentos que contengan proteínas. {'\n'}
                {'\n'}Por último, las grasas, son muy importantes tanto como
                fuente de energía como para regular la temperatura corporal,
                para la formación de algunas hormonas y también para otras
                funciones corporales, de manera que tu alimentación debe estar
                compuesta por los tres macronutrientes.
                {'\n'}
                {'\n'}Pero recuerda que también están los micronutrientes, estos
                son las vitaminas y los minerales. Las vitaminas y los
                minerales, son muy importantes pues actúan como reguladores de
                una cantidad de funciones orgánicas. Imagínate que tu cuerpo
                está siendo manejado por un chofer, pero ese chofer tiene un
                copiloto, el cuál será una vitamina o un mineral. {'\n'}De
                manera que, siempre debes incluir alimentos que contengan
                vitaminas y minerales dentro de tu dieta.
              </p>
            </div>
          );
        case 2: {
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  Tema 2: Grupos de alimentos y su importancia
                </p>{' '}
                {'\n'}
                {'\n'}
                ¿Sabías que existen diferentes grupos de alimentos? En
                Venezuela, tenemos cinco grupos de alimentos: El primer grupo,
                es el grupo de los cereales, los granos, tubérculos y plátano.
                Los alimentos que integran este grupo, son alimentos ricos en
                hidratos de carbono o carbohidratos, estos carbohidratos son muy
                importantes para obtener energía. {'\n'}
                {'\n'}Entre los alimentos que podrían estar incluidos en este
                grupo tenemos: las papas, el arroz, cereales en general, los
                granos o leguminosas, como las caraotas, las lentejas o las
                arvejas. {'\n'}
                {'\n'}El segundo grupo se llama hortalizas y frutas, parece que
                el nombre de este es mucho más fácil para adivinar qué tipo de
                alimentos está metido en este grupo. {'\n'}
                {'\n'}En el grupo de las hortalizas y las frutas, se encuentran
                los alimentos que aportan una gran cantidad de vitaminas y
                minerales, además, estos alimentos son ricos en agua, por lo que
                son muy importantes en tu alimentación. Siempre incluye
                alimentos de este grupo. {'\n'}
                {'\n'}Ya dijimos que el grupo se llama hortalizas y frutas; las
                frutas componen una parte importante de este grupo de alimentos.{' '}
                {'\n'}Pero tenemos también las hortalizas, llamadas comúnmente
                vegetales. {'\n'}
                {'\n'}Los alimentos que podemos nombrar en este grupo son todas
                las frutas pero también los vegetales que contienen fibra, como
                por ejemplo los tomates, la lechuga, todos los vegetales verdes,
                todos esos vegetales que tienen un montón de colores, son los
                que conforman parte de este grupo, con los que normalmente
                hacemos ensaladas o sopas. {'\n'}
                {'\n'}El tercer grupo, está compuesto por las carnes, los
                lácteos y los huevos. Este grupo contiene alimentos ricos en
                proteínas. {'\n'}
                {'\n'}Como se dijo anteriormente, las proteínas son importantes
                porque tienen una función estructural, son las que van a ayudar
                a que desarrolles tus músculos, a que crezcas, pero también en
                una serie de funciones muy pero muy importantes, cómo es la
                función inmunológica contra las enfermedades. {'\n'}
                {'\n'}En este grupo tenemos: las carnes, como las carnes rojas,
                pero también el pescado y el pollo; los huevos, que ya sabemos
                que son un alimento muy rico, y también los lácteos, como la
                leche y los quesos. Incluye siempre alimentos de este grupo.{' '}
                {'\n'}
                {'\n'}El cuarto grupo, se llama grasas y aceites vegetales. Este
                grupo es muy importante, porque las grasas no solamente son
                fuente de energía, sino que ayudan a que tu piel y tu cabello
                estén saludables, tienen funciones importantes como que forman
                parte de algunas hormonas y de las membranas de tus células.{' '}
                {'\n'}
                {'\n'}Así que, comer alimentos que contienen grasa es muy
                importante. En este grupo se incluyen todos aquellos alimentos
                que tienen grasa. {'\n'}
                {'\n'}Es importante, que la selección que hagas, esté orientada
                hacia grasas que sean de buena calidad. Por ejemplo: el
                aguacate, los aceites (sobre todo aceites como el de oliva) y
                también, otro tipo de grasas como las que contienen alimentos de
                origen animal. {'\n'}
                {'\n'}El último de los cinco grupos de alimentos, es el del
                azúcar, la miel y el papelón. Este grupo es de consumo opcional,
                en general, estos alimentos sirven para dar sabor dulce a otros
                alimentos. Sin embargo, los nutrientes que contienen que son
                carbohidratos, podemos obtenerlos de los alimentos
                pertenecientes a otros grupos, por lo que, este grupo no se
                considera esencial. La idea es, que combines alimentos
                pertenecientes a todos los grupos. los primeros cuatro grupos
                son esenciales. {'\n'}
                {'\n'}Recuerda, la variedad es una palabra clave dentro de lo
                que es la alimentación saludable; trata de incluir siempre
                alimentos de todos los grupos, como te dije, el último grupo es
                opcional, si decides utilizarlo hazlo de manera moderada.
              </p>
            </div>
          );
        }
        case 3:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">Tema 3: Plato ideal</p> {'\n'}
                {'\n'}
                El plato saludable, es un sistema que se creó para simplificar
                lo que es una alimentación saludable, para que las personas
                pudieran visualizar de manera más fácil, cómo debe componerse
                una alimentación saludable. {'\n'}
                {'\n'}Imagina que tienes tu plato adelante, vamos a dividir tu
                plato en tres partes, el plato es un círculo, vamos a dividirlo
                por la mitad: En una mitad vamos a colocar siempre una cantidad
                de vegetales y frutas, es decir, la mitad del plato siempre va a
                estar con vegetales. {'\n'}
                {'\n'}La otra mitad la vamos a dividir en dos, por lo que se
                tendrá dos cuartos: En uno de los cuartos colocaremos alimentos
                que contengan carbohidratos almidonosos. {'\n'}
                {'\n'}Como por ejemplo: la papa, el arroz, entre otros. En el
                otro cuarto vamos a colocar alimentos que contengan proteínas,
                como las carnes, el pescado y el pollo. Recuerda que la
                selección de tus alimentos debes hacerla pensando en alimentos
                saludables, que contengan los nutrientes que necesitas. {'\n'}
                {'\n'}El plato saludable, va a ayudar a visualizar cómo debe ser
                tu alimentación; es una estrategia bien interesante, te
                invitamos a practicarla y dividir tu plato en vegetales,
                almidones y proteínas. {'\n'}
                {'\n'}De esa manera estarás asegurando que tu alimentación va a
                ser equilibrada. Ojo, nunca olvides que la clave también está en
                la variedad, no comas siempre los mismos alimentos, atrévete a
                probar cosas nuevas, llena tu plato de colores, come vegetales
                distintos, frutas diferentes.
              </p>
            </div>
          );
        case 4:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">Tema 4: Mitos de la alimentación</p>{' '}
                {'\n'}
                {'\n'}
                Existen diversos mitos acerca de la alimentación y es que
                alrededor de la alimentación siempre hay muchísima información.
                Pueden ser muchas cosas las que has escuchado de repente en
                casa, en la televisión, en alguna aplicación o en alguna red
                social, pero no todo lo que ves es cierto. Por eso, siempre es
                importante recurrir a los profesionales. {'\n'}
                {'\n'}Algunos de los mitos más frecuentes son: Para bajar de
                peso hay que dejar de comer carbohidratos: Esto es falso, ya que
                los alimentos con carbohidratos son muy importantes para la
                salud de las personas porque aportan energía y muchos
                nutrientes; es indispensable que estén presente en cada comida
                que se haga en el día. {'\n'}
                {'\n'}No deben eliminarse de las dietas, sino comerlos
                adecuadamente. Las grasas son dañinas: Las grasas NO son
                dañinas, estas forman parte de las hormonas y las membranas que
                cuidan los órganos, y regulan la temperatura corporal de los
                seres humanos. Al igual que los carbohidratos, las grasas no
                deben eliminarse de la dieta, la clave es escoger grasas sanas,
                y estas se pueden encontrar en alimentos como el aguacate, el
                aceite de oliva, los frutos secos o el salmón. {'\n'}
                {'\n'}Para bajar peso se debe saltar comidas: No es recomendable
                para la salud de las personas saltarse comidas en el día a día.{' '}
                {'\n'}
                {'\n'}Las comidas se deben adaptar a tu rutina y estilo de vida,
                teniendo una dieta balanceada y variada con los nutrientes
                necesarios para mantenerte sano. {'\n'}
                {'\n'}Los huevos son un alimento malo: esto es completamente
                falso, de hecho es todo lo contrario, los huevos son uno de los
                alimentos más interesantes y más nutritivos que pueden existir
                en tu alimentación. {'\n'}
                {'\n'}Los huevos están compuestos de proteínas muy importantes
                y, además, en la yema se encuentra una gran cantidad de vitamina
                A, importante para una serie de funciones y para mantener tu
                salud, de manera que, no te abstengas a comer estos alimentos,
                son ricos y son muy pero muy importantes. {'\n'}
                {'\n'}Dietas milagrosas: Las dietas milagrosas, no existen. Lo
                que existe es la alimentación variada, las dietas balanceadas
                que tengan que ver con tu estilo de vida y con tus
                requerimientos. Las dietas que te prometen que vas a perder peso
                de manera veloz o que vas a lograr tus objetivos sin hacer mucho
                esfuerzo, no existen. No creas realmente en ese tipo de
                milagros, más bien consulta a un especialista para que te ayude
                a estructurar mejor tu alimentación.
              </p>
            </div>
          );
        case 5:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">Tema 5: Alimentación consciente</p>{' '}
                {'\n'}
                {'\n'}
                La alimentación consciente consiste en alimentarse prestando
                atención, quizás cuando lo escuchas piensas: Pero si yo me
                alimento prestando atención; lo que pasa es que muchas veces eso
                no es cierto. {'\n'}
                {'\n'}Si yo te pregunto qué comiste ayer, ¿lo recuerdas? si te
                pregunto qué ingredientes había en eso que comiste ¿lo sabes?
                ¿Recuerdas la comida? ¿recuerdas cómo estaba compuesta? Si no lo
                recuerdas, es porque quizás no prestaste mucha atención. {'\n'}
                {'\n'}La alimentación consciente significa concentrarnos en el
                momento de comer, esto quiere decir que, en ese momento debemos
                pensar solamente en lo que estamos haciendo, comer.
                {'\n'}
                {'\n'}Debemos concentrarnos en el alimento, verlo, olerlo,
                detallar qué pasa con él cuando está en nuestra boca, apreciar
                su sabor, dejarlo un momento ahí para poder entender de qué se
                trata.
                {'\n'}
                {'\n'}Resulta que, cuando comes de manera inconsciente, es
                decir, sin prestar atención porque quizás estás viendo la
                televisión, el celular o incluso estás pensando en las cosas que
                tienes que hacer; tu cerebro realmente no está registrando el
                momento de comer, ni tampoco la información que está recibiendo
                de ese alimento. {'\n'}
                {'\n'}Esto hace que, quizás, tu relación con los alimentos
                comience a ser un poco conflictiva, por eso es tan importante
                tratar de conectar nuevamente contigo, con las sensaciones, con
                lo que experimentas cuando comes. {'\n'}
                {'\n'}Pregúntate: ¿te sientes lleno? ¿Sientes que quieres comer
                más?; de eso se trata la alimentación consciente. {'\n'}
                {'\n'}Este tema es sumamente importante porque si haces
                ejercicios y aplicas eso en tu alimentación vas a empezar a
                relacionarte con los alimentos de una manera más amigable, más
                completa, a entenderlo mejor, a apreciar mejor lo que estás
                comiendo y esta dinámica también te ayuda a absorber mejor los
                alimentos.
              </p>
            </div>
          );
      }
    } else if (module === 2) {
      switch (topic) {
        case 1:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  TEMA 1: ¿Qué es salud mental y sus componentes?{' '}
                </p>{' '}
                {'\n'}
                {'\n'}
                Salud Mental, es el estado de bienestar en el cual una persona
                es consciente de lo que puede hacer. No necesariamente la salud
                mental está ligada a lo bueno, cuando hablamos de salud mental,
                a veces podemos decir que estamos tristes, que no nos sentimos
                bien, no logras reaccionar como deseas, mentalmente no te
                sientes bien. {'\n'}Esto se debe a que la salud mental tiene 5
                elementos: físico, mental, espiritual, social. {'\n'}1. El
                Físico: se caracteriza por el buen funcionamiento del cuerpo,
                resistencia a enfermedades, la capacidad física de responder a
                una diversidad de eventos. Se da cuando la persona siente que el
                cuerpo funciona bien y hay una capacidad física para responder a
                los desafíos. Por ejemplo, te sientes físicamente bien para
                jugar un partido de fútbol dentro de una competencia. {'\n'}2.
                El mental se refiere a la habilidad de: Aprender y tener
                capacidades intelectuales, procesar la información y actuar con
                base en ella, tomar decisiones bien pensadas, entender tus
                nuevas ideas. Las personas viven satisfechas consigo misma,
                cuando se sienten bien con relación a las demás personas y
                pueden con los retos que les ponga la vida. Por ejemplo,
                constantemente sentirte bien contigo mismo, sentir que tomas
                buenas decisiones, sentir que creces y te sientes orgulloso de
                eso. {'\n'}3. El tercer elemento es el social, la habilidad de
                llevarse bien con la gente y el ambiente, satisfaciendo las
                relaciones con otros. Aquellos que poseen bienestar social
                pueden socializar de mejor manera. Se caracteriza por buenas
                relaciones con otros y adaptaciones exitosas en el ambiente. Un
                ejemplo: ¿Cómo nos sentimos después de una reunión donde hemos
                estado con gente querida disfrutando? O ¿Cómo nos relacionamos
                con los compañeros? {'\n'}4. El cuarto elemento es el
                espiritual, es el que se refiere a las creencias y prácticas
                religiosas, a la idea de un ser supremo. Representa la habilidad
                para descubrir lo que queremos en la vida. Es aprender, cómo
                experimentar el amor, el disfrute, la paz y el sentido del logro
                (autorrealización). Las personas con un buen bienestar
                espiritual continuamente intentan ayudar a otros para que
                alcancen su máximo potencial. {'\n'}5. El quinto elemento es el
                emocional, la capacidad de controlar las emociones, sentirse
                cómodo al expresarlas y de llevarlas a cabo de manera adecuada.
                La comunicación se vuelve más fácil, ya que saber expresar lo
                que sientes. {'\n'}Genera el crecimiento, el desarrollo y la
                capacidad para controlar efectivamente lo que nos hace sentir
                mal. Consiste en la habilidad de manejar las emociones; sentirse
                cómodo al manifestarlas y hacerlo de forma apropiada. Las
                personas que son más felices son las que logran vivir con menos
                peleas, conflictos, comprenden y aceptan las cosas que les
                ocurre. {'\n'}Cuando observas, sientes y reconoces lo que
                sientes, le das nombres, lo aceptas y reflexionas sobre cómo
                puedes expresarlo de la mejor forma, estás manejando tus
                emociones y ayudándote a tener salud mental.
              </p>
            </div>
          );
        case 2:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  {' '}
                  TEMA 2: ¿Qué son las emociones? Y la función de cada emoción{' '}
                </p>
                {'\n'}
                {'\n'}
                ¿Cuáles son las emociones básicas que podemos sentir?. {'\n'}●
                Miedo: Una amenaza o peligro que produce ansiedad,
                incertidumbre, inseguridad y nos motiva a actuar para evitar
                consecuencias negativas. {'\n'}● Ira: es una emoción que se
                expresa a través del resentimiento o de la irritabilidad. {'\n'}
                Se encuentra ligada a la frustración, dado que surge ante la
                imposibilidad de resolver algo. La ira, en ocasiones, ocurre
                como una respuesta ante la injusticia. Nos motiva a luchar
                contra los errores y las injusticias, y poner límites. {'\n'}●
                Rechazo: se entiende como lo contrario a sentirse aceptado,
                excluir a alguien intencionalmente de una situación es un
                ejemplo de rechazo. {'\n'}● Tristeza: Sensación de decaimiento.
                Nos motiva a reflexionar y buscar apoyo de los demás. {'\n'}●
                Sorpresa: es causada por algo inesperado. El que te digan algo
                que no esperas y te sobresalta, es una reacción sorpresiva.{' '}
                {'\n'}● Alegría: se entiende como un sentimiento de placer
                causado por un incentivo. Cuando te regalan algo que querías
                mucho, produces alegría.
              </p>
            </div>
          );
        default:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  {' '}
                  TEMA 3: Bienestar emocional y sus dimensiones{' '}
                </p>
                {'\n'}
                {'\n'}
                Cuando hablamos de salud mental, hablamos de cómo la gente lleva
                a cabo su día a día, afrontando retos que se va encontrando en
                su vida que no necesariamente tienen que ser malos. Se refiere,
                además, a comportamientos que llevan a las personas a actuar y
                ver la vida de una manera positiva. Para que tengamos una idea,
                los psicólogos dicen que hay diferentes componentes del
                bienestar: Autoaceptación, autonomía, crecimiento personal,
                dominio propio, propósito en la vida y relaciones positivas.{' '}
                {'\n'}La autoaceptación: Las personas con una alta aceptación
                tienen una actitud positiva hacia sí mismas, aceptan sus
                distintas características, incluyendo lo negativo, y se sienten
                bien respecto a su pasado. Las personas con baja autoaceptación
                se sienten insatisfechas consigo mismas y decepcionadas con su
                pasado, tienen problemas con ciertas características que poseen
                y desearían ser diferentes a como son. Autonomía: Consiste en
                tener la sensación de que puedes elegir por ti mismo, tomar tus
                propias decisiones para ti y para tu vida, mantener tu
                independencia personal y tus convicciones. Las personas con
                mayor autonomía son más independientes y tienen estándares
                personales. Las personas con baja autonomía están preocupadas
                por lo que piensen los demás de ellos y se dejan influir o
                guiar, actuando y pensando en base a lo que los demás esperan de
                ellos. {'\n'}Crecimiento Personal: Consiste en sacar el mayor
                provecho a tus talentos y habilidades, para crecer como persona.
                Las personas con puntuaciones altas en este componente
                consideran que están en continuo crecimiento. {'\n'}Quienes
                puntúan bajo, tienen la sensación de estar atascados, se sienten
                aburridos, desmotivados y con poco interés en la vida, e
                incapaces de desarrollar nuevas actitudes, habilidades,
                creencias o comportamientos. Dominio del Entorno: Es como
                manejas y aprovechas las oportunidades de tu ambiente para
                satisfacer tus necesidades y capacidades. {'\n'}Las personas con
                un alto dominio del entorno poseen una mayor sensación de
                control sobre el mundo y se sienten capaces de influir en el
                ambiente que las rodea. Las personas con bajo dominio del
                entorno tienen problemas para manejar los asuntos de la vida
                diaria, se sienten incapaces de mejorar o cambiar su entorno, no
                son conscientes de las oportunidades ni las aprovechan y piensan
                que no tienen ningún control sobre su ambiente. Propósito de
                Vida: Es decir, que tu vida tenga un sentido y un propósito. Las
                personas necesitan marcarse metas y definir una serie de
                objetivos que les permitan dotar a su vida de sentido. {'\n'}
                Quienes tienen un propósito de vida definido persiguen metas,
                sueños u objetivos, sienten que su presente y su pasado tienen
                significado, y mantienen creencias que dan sentido a su vida.
                Quienes puntúan bajo tienen la sensación de que la vida no tiene
                sentido, de que no van a ninguna parte, tienen pocas metas y no
                tienen creencias que aporten sentido a sus vidas. {'\n'}
                Relaciones Positivas: Consiste en tener relaciones de calidad
                con los demás, gente con la que se pueda contar, alguien a quien
                amar. De hecho, la pérdida de apoyo social y la soledad aumentan
                la probabilidad de padecer una enfermedad y reducen la esperanza
                de vida. {'\n'}Las personas que puntúan alto en esta dimensión
                tienen relaciones buenas, satisfactorias y de confianza con los
                demás. Las personas que puntúan bajo tienen pocas relaciones
                cercanas, les resulta difícil ser cálidos, abiertos o
                preocuparse por los demás, están aislados o frustrados en sus
                relaciones y no están dispuestos a tener compromisos o vínculos
                importantes con los demás.
                {'\n'}Entonces, ¿Podríamos hacernos conscientes de cómo llevamos
                nuestro bienestar? Ser felices no consiste en estar siempre
                bien, alegre. ¿Por qué? Debemos entender que la felicidad se
                basa en aceptar y gestionar las cosas difíciles. El dolor es
                parte de la vida. Ejemplo: una madre cuando da a luz, eso duele,
                verdad? Pero tras ese dolor hay vida. {'\n'}Cuando empezamos a
                hacer ejercicio, al principio nos duelen los músculos, pero a
                las siguientes semanas ya no duele y tenemos unos músculos más
                fuertes. Nos ayuda a sobrevivir, por ejemplo, una ruptura
                amorosa, duele y se siente mal, pero a través de esto se genera
                un aprendizaje interno y nos enseña a cómo llevar la vida. Nos
                ayuda a tener contraste y así valor; sabemos lo que cuestan las
                cosas, sabemos que hay esfuerzos que nos transforman, pero que
                traen una recompensa, por ejemplo el trabajar para comprar algo
                que realmente quieres, el ahorrar para eso y llegar a la
                satisfacción de tenerlo de allí se genera valor y te hace sentir
                bien. Todo es aprendizaje y ayuda a sentirnos mejor. Por lo
                tanto, la felicidad se construye, el 40% de ella depende de ti.
                Eso va a depender de tu intención, todo aquello que podemos
                hacer para ser más felices. {'\n'}Las personas más felices son
                aquellas que más han trabajado en sí mismas. Ser feliz implica
                mucho trabajo, casi tanto o más que ser infeliz, así que escoge
                inteligentemente. Ser feliz implica que has decidido tomar el
                control de tu vida y no ser una víctima. Tu vida es una serie de
                experiencias, de las cuales creces como persona. Solo tienes una
                vida, trabaja tan duro como puedas para hacer de ella la mejor
                vida.
              </p>
            </div>
          );
      }
    } else if (module === 3) {
      switch (topic) {
        case 1:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  {' '}
                  TEMA 1: Habilidades básicas: comunicación verbal y no verbal,
                  escucha activa y empatía.
                </p>
                {'\n'}
                {'\n'}
                a. Conversación: En la conversación tendemos a veces a creer que
                es el “qué” y no el “cómo”. Por tanto hay dos factores
                importantes en la comunicación: la persona que habla y la otra
                que escucha. A su vez, tenemos el lenguaje verbal y el no
                verbal. {'\n'}
                {'\n'}Queramos o no, siempre estamos enviando mensajes, con
                nuestro cuerpo, mirada, posiciones, y el tono de voz. Algunos
                ejemplos son: {'\n'}- Voltear los ojos, puede significar
                fastidio. {'\n'}- Agitar la mano para saludar. {'\n'}- Hablar
                con un tono de voz fuerte, pudiera significar estar enfadado.{' '}
                {'\n'}
                {'\n'}b. Escucha activa: {'\n'}Cuando hablamos de escucha activa
                nos referimos a una manera de comunicarnos en donde se le quiere
                hacer saber a la persona que nos está comunicando algo que,
                realmente se le está entendiendo y comprendiendo. Cuando
                escuchamos de manera activa a alguien, lo hacemos de manera
                consciente, es decir, hacemos un esfuerzo por centrar toda
                nuestra atención en aquello que nos está comunicando la otra
                persona. {'\n'}Algunas expresiones de escucha activa que podemos
                oír cotidianamente son: «Sí, estoy de acuerdo», «Entiendo», «Ya
                veo», «Claro, eso tiene sentido».
                {'\n'}Cuando te están hablando, tú debes mostrarles a la persona
                tú atención con los siguientes elementos: {'\n'}1. Mira a quien
                habla de forma adecuada y amigable. {'\n'}2. Ten el cuerpo
                ligeramente inclinado hacia la otra persona. {'\n'}3. Postura
                relajada. {'\n'}4. Distancia corporal adecuada. {'\n'}5.
                Asentamiento de cabeza. (Hacer sí con la cabeza) Vamos hacernos
                estas preguntas: {'\n'}1. ¿Qué comunicas cuando oyes a una
                persona? {'\n'}2. ¿Cómo se siente la otra persona cuando la
                escuchas atentamente? {'\n'}3. ¿Cómo se siente y cómo reacciona
                una persona cuando no se le escucha o presta atención? {'\n'}
                {'\n'}A pesar de querer oír con atención, a veces nos aburrimos,
                cansamos, estamos de bajo ánimo, preocupados, y esto nos impide
                estar atentos. Si nos encontramos con una persona en este
                estado, podemos: {'\n'}1. Preguntarle qué le pasa {'\n'}2.
                Decirle que si prefieren lo dejan para otro momento{'\n'} 3.
                Hablar de otra cosa.
                {'\n'}Y si somos nosotros los que no estamos en condiciones de
                oír atentamente, podemos: {'\n'}1. Seguir en otro momento la
                conversación.
                {'\n'}2. Comentar que estás distraído y pedir disculpas. {'\n'}
                {'\n'}c. Empatía La empatía se trata básicamente de comprender
                al que te está hablando, intentando ponerte en su lugar para
                tratar de descubrir lo que está sintiendo. Para empatizar con
                alguien, mientras te está contando algo, debes: {'\n'}1.
                Prestarle atención {'\n'}2. Preguntarle ¿qué siente? ¿por qué se
                siente así? {'\n'}3. Comunicárselo de forma tentativa: “a lo
                mejor…” “quizás…”, “es posible…” {'\n'}
                {'\n'}¿Por qué crees que es mejor hacerlo de forma tentativa?{' '}
                {'\n'}Al momento de hablar de manera tentativa, en caso de que
                nos equivoquemos con ese sentimiento, la otra persona puede
                aclarar lo que en verdad siente, sin evitar hacerlo sentir mal.
              </p>
            </div>
          );
        case 2:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  {' '}
                  TEMA 2: Habilidades de conversación.
                </p>
                {'\n'}
                {'\n'}
                a. Inicio de Conversación: Imagina que quieres conocer a un
                compañero de clases, al que sabes quién es de vista, pero con el
                que nunca has hablado. Al salir de clases coinciden en la
                parada, y quieres aprovechar la oportunidad para hablarle.{' '}
                {'\n'}Lo primero y recomendable es que esa persona te haya visto
                y muestre una apertura con su comunicación no verbal (gestos).
                Te acercarás, mirándola y saludándola. “¿Hola, llevas mucho rato
                esperando? Yo debo tomar el de Baruta, ¿sabes si ha pasado?”.
                Dependiendo de cómo responda la persona, verás si la
                conversación puede o no continuar. {'\n'}Si la interacción ha
                resultado bien, sería bueno que la despedida fuera también
                positiva y mostrando interés en nuevos posibles encuentros, por
                ejemplo: Mañana nos vemos en clase. {'\n'}Siempre que te
                acerques a hablarle a una persona, ten en cuenta las siguientes
                recomendaciones: {'\n'}1. Procura que la persona te vea venir.{' '}
                {'\n'}2. Trata de establecer primero un contacto con la mirada
                antes de hablarle. {'\n'}3. Saluda y se cordial {'\n'}4. Busca
                un momento que sea adecuado; si ves que la otra persona está
                haciendo cosas o que está muy ocupada, es mejor que busques otro
                momento más oportuno. {'\n'}Si es alguien que acabas de conocer
                y es una comunicación informal, ten en cuenta lo siguiente:{' '}
                {'\n'}1. Utiliza preguntas abiertas, generales, porque dan
                opción de que la persona pueda responder de varias formas y
                pueda extenderse hablando de lo que quiera. Por ejemplo, un
                ¿Cómo has estado? No cae mal. {'\n'}2. Evita realizar preguntas
                demasiado íntimas o complicadas. También es importante no usar
                en exceso el porqué.
                {'\n'}
                {'\n'}b. Mantenimiento de la Conversación: Para mantener una
                conversación podemos expresar emociones, pensamientos, hacer
                preguntas a quien nos habla, para conocer sus puntos de vista, y
                se puede también hablar de cosas no personales, como cosas de la
                actualidad. {'\n'}Para que una conversación no se estanque y sea
                amigable, se puede ir cambiando el tema de conversación de forma
                espontánea. Para mantener la conversación, se pueden utilizar
                preguntas abiertas, y a la vez, responder de una forma abierta.
                Un ejemplo, imagínate que estás hablando con una amiga, y te
                está contando sobre sus tareas en casa, y le preguntas: “¿Y
                sueles hacer la comida también?”. De esta forma, estás
                aprovechando la información que te da para ir ampliando la
                conversación. {'\n'}
                {'\n'}c. Afrontar silencios En una conversación es normal que
                hayan silencios; algunas personas se incomodan con eso; por lo
                cual podemos decir; ¡Oye, nos hemos quedado muy callados, ¿te
                estoy aburriendo?, Te has quedado de repente muy callado, ¿te
                molesta algo que te he dicho? El otro no solo se puede quedar
                callado porque esté aburrido, también puede ser por: {'\n'}- Se
                ha acabado el tema y está pensando en otro. {'\n'}- El tema es
                interesante y está pensando sobre él. {'\n'}- Los dos están
                pensando en agradar al otro. - Puede estar preocupado por algo.
                {'\n'}- No te ha entendido muy bien y está pensando en ello.{' '}
                {'\n'}
                {'\n'}d. Finalización de la Conversación Dependiendo de la
                relación que tengas con la persona, las conversaciones deben
                acabarse. Por lo cual, si estás interesado en la conversación
                pero debes irte, puedes: {'\n'}- Decirle a la persona que debes
                irte, y si quieres puedes darle la razón del porque te vas.{' '}
                {'\n'}- Comparte lo bien que te has pasado hablando con ella{' '}
                {'\n'}- Intenta planear eventos futuros juntos. Podría ser algo
                así: “Bueno Rafa, te tengo que dejar, he quedado en llevar a mi
                mamá al médico. {'\n'}Me ha encantado pasar un rato contigo. A
                ver si nos vemos otro día, yo los lunes vengo aquí a desayunar,
                así que si te apetece ya sabes dónde encontrarme” Pero si no
                estás interesado en continuar la conversación, puedes: {'\n'}-
                Simplemente decirle que te tienes que ir. Da una razón si
                quieres, pero recuerda que no estás obligado. {'\n'}- No te
                inventes excusas de historias extrañas, disculpas o planes que
                no tienes intención de cumplir. {'\n'}
                {'\n'}¿Por qué es bueno tener habilidades para conversar? {'\n'}
                1. Te das a conocer y llegas a conocer a los demás {'\n'}2.
                Generas relaciones como: amistades, pareja, compañeros,
                conocidos. {'\n'}3. Puedes volver a tener relaciones pasadas.{' '}
                {'\n'}4. Pasas un momento agradable. {'\n'}6. Obtienes
                información y ayuda. {'\n'}7. Sentirse acompañado, evitar el
                sentimiento de soledad {'\n'}8. Sabrás finalizar una
                conversación que no te apetece, y evitas tener situaciones
                incómodas.
              </p>
            </div>
          );
        case 3:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">TEMA 3: Expresar opinión. </p>
                {'\n'}
                {'\n'}
                Es importante tener en cuenta que las personas que no expresan
                su opinión y se encuentran de acuerdo con todo, resultan
                aburridas. Pero también, las personas, que en el otro extremo,
                nunca se disculpan o admiten su ignorancia pueden resultar
                desagradables. {'\n'}La mejor forma de expresar nuestra opinión
                es: {'\n'}1. Usar un lenguaje correcto {'\n'}2. Ser respetuosos.{' '}
                {'\n'}
                {'\n'}Algunos ejemplos:
                {'\n'}- Olga, acabo de darme cuenta que tal vez mi
                comportamiento de antes pudo molestarte, fui un tanto grosera,
                perdona, estaba un poco ansiosa. {'\n'}- Yo creo que no será muy
                adecuado hacer ese escrito al rectorado sin antes haber hablado
                con el profesor implicado; me parece que primero debemos hablar
                con él, expresarle la situación y darle la oportunidad de saber
                lo que ocurre y dar su respuesta; en función de lo que diga y
                cómo lo diga, si no es beneficioso para nosotros, ya si
                podríamos ir al rectorado. {'\n'}- Pues mira, de esas cosas, yo
                no tengo ni idea, así que no puedo ayudarte.
              </p>
            </div>
          );
        case 4:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">TEMA 4: Estilo de Conducta social. </p>
                {'\n'}
                {'\n'}
                La conducta social son aquellas conductas que están relacionadas
                con las personas que te rodean, y que se van obteniendo de
                acuerdo a lo que miras en los demás. {'\n'}
                {'\n'}a. Inhibición: Se le llama así al no poder realizar
                hábitos o costumbres. {'\n'}Ejemplos de inhibición conductual
                cuando estamos pequeños: {'\n'}- No le gusta entrar en contacto
                con otros niños o adultos desconocidos {'\n'}- El niño suele
                taparse la cara, se agarra a adultos de confianza, llora, parece
                asustado y preocupado, queda como paralizado, deja de jugar.{' '}
                {'\n'}- Juega solo la mayoría del tiempo. Le cuesta
                relacionarse. {'\n'}- Evita el riesgo en los juegos. Por
                ejemplo: Lugares altos, como un tobogán. {'\n'}
                {'\n'}b. Asertividad: Es la habilidad personal que nos permite
                expresar sentimientos, opiniones y pensamientos, en el momento
                oportuno, de la forma adecuada y considerando los sentimientos y
                opiniones de los demás. {'\n'}Una persona es asertiva cuando
                tiene la capacidad de ejercer o defender sus derechos
                personales; por ejemplo, decir “no”, expresar opiniones
                contrarias o desacuerdos sin permitir que la manipulen, como lo
                hace la persona sumisa, ni violar los derechos de otras
                personas, como lo hace la agresiva. {'\n'}
                {'\n'}c. Agresividad: Es reconocida como la conducta a dañar,
                destruir, humillar, entre otras acciones que afectan el
                bienestar de una persona, uno mismo o un objeto. {'\n'}Algunos
                ejemplos de esta conducta son: {'\n'}- Criticar o protestar
                frecuentemente. {'\n'}- Estar enojado. {'\n'}- Aplazar
                actividades o ser olvidadizo. {'\n'}- Realizar tareas de manera
                ineficiente. {'\n'}- Actuar con obstinación. {'\n'}- Culpar a
                otras personas. {'\n'}- Quejarse por ser menospreciado.
              </p>
            </div>
          );
        case 5:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">TEMA 5: Derechos asertivos </p>
                {'\n'}
                {'\n'}
                Son aquellos que asumimos que tiene cualquier ser humano por el
                hecho de serlo. Algunos son: buscar la felicidad; intentar
                cambiar las cosas que no nos gustan; mostrar que no estamos
                conformes por un trato injusto; hacer y rechazar peticiones; ser
                tratado con respeto; tener nuestras propias opiniones y valores;
                elegir a nuestros amigos, o estar solos cuando así lo deseemos.
                {'\n'}
                {'\n'}El derecho a ser tu propio juez: Es el principal derecho
                asertivo, del que se derivan todos los demás. Significa que
                tienes derecho a tener tus propias opiniones y creencias; a
                evaluar tus sentimientos y tu conducta, y a aceptarlos como
                válidos si así te parece, aunque a otros no les parezcan
                aceptables. {'\n'}Siguiendo tus valores y metas. {'\n'}
                {'\n'}El derecho a elegir si queremos o no dar explicaciones: No
                tienes porqué sentirte obligado a dar explicaciones sobre tu
                comportamiento para que los demás decidan si es correcto o
                incorrecto, ni para intentar convencerlos de que no estás
                equivocado. Por supuesto, los demás siempre tendrán la opción de
                decirte que no les gusta lo que haces. {'\n'}En ese caso, podrás
                optar por: no hacerles caso, buscar un acuerdo o negociación, o
                respetar sus preferencias y modificar por completo tu
                comportamiento. Pero hay que tener claro que los verdaderos
                responsables de nuestra vida, nuestras emociones y nuestras
                conductas somos cada uno de nosotros. {'\n'}
                {'\n'}El derecho a cambiar de opinión: Para ser realistas y
                estar bien consigo mismo, conviene aceptar que cambiar de
                opinión es algo normal. Algunas ideas irracionales que a menudo
                podemos oir o decir son: "Una vez que te hayas comprometido a
                algo, no debes cambiar de opinión y, si cambias, debes
                justificarte o reconocer que estabas en un error", "Si te
                vuelves atrás demuestras que eres un irresponsable". {'\n'}Pero,
                debes no hacer caso a esos "deberías" irracionales y tener claro
                que tienes derecho a cambiar de opinión. {'\n'}
                {'\n'}El derecho a cometer errores: Si creemos, que no debemos
                cometer errores (cosa que es imposible porque todos nos
                equivocamos a veces), cuando los cometamos reaccionaremos
                pensando y sintiendo que hemos hecho algo malo.
                {'\n'}También será fácil que otras personas nos manipulen y nos
                hagan sentir culpables por habernos equivocado en algo. Es por
                esto que, debemos saber que tenemos derecho a cometer errores, y
                que errar es de humanos, de ellos aprendemos, cada error nos
                deja una lección. {'\n'}
                {'\n'}El derecho a no necesitar la aprobación de los demás: Las
                relaciones entre personas son muy importantes y es muy grato
                gustar a los demás. Pero intentar agradar a todos es imposible e
                incluso te genera mucho cansancio. Pues, conseguir siempre la
                aprobación de los demás es un objetivo inalcanzable. Por tanto,
                es mejor aceptar que hay personas a quienes no les gustemos, y
                tener en cuenta que esto es algo muy normal para que así no nos
                afecte el hecho de no caerle bien a alguien o que algo de
                nosotros no les guste a los demás. Si es una crítica
                constructiva, analiza lo que te están diciendo y si consideras
                que puedes cambiar, hazlo, pero no cambies tu integridad, o
                algún gusto por otras personas. {'\n'}
                {'\n'}El derecho a no intentar alcanzar la perfección: Algunas
                personas creen que, aunque no somos perfectos, debemos intentar
                alcanzar la perfección en todo lo posible. Por tanto, consideran
                que si alguien nos dice cómo podemos mejorar, tenemos el deber
                de seguir esa dirección. Pero ya hemos visto lo negativo que son
                los "deberías". Además, si nuestras expectativas son realistas,
                no esperaremos ser perfectos -ni siquiera acercarnos a ello ya
                que los humanos estamos llenos de limitaciones. Bastará con que
                hagamos las cosas de una forma que nos haga sentirnos bien con
                nosotros mismos sin exigirnos de forma exagerada.
              </p>
            </div>
          );
        case 6:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">TEMA 6: Asertividad Positiva</p>
                {'\n'}
                {'\n'}
                Las relaciones íntimas con otras personas, son las experiencias
                más profundas de nuestra vida. El amor puede aparecer en dos
                formas muy diferentes: amor apasionado y amor de compañero. El
                apasionado es un amor fuerte, de sentimientos de ternura,
                sexualidad, ansiedad, alivio y a veces celos. El amor de
                compañero es una emoción más suave. Es un afecto amistoso y de
                unión profunda. {'\n'}El agrado se refiere al afecto que
                sentimos por conocidos casuales. La diferencia entre el amor y
                el agrado, es la profundidad de nuestros sentimientos y que tan
                relacionados estemos con otras personas. {'\n'}
                {'\n'}¿Cómo podemos expresar esas emociones? A las personas que
                queremos mostrarles gestos de amor de pareja, podemos: {'\n'}1.
                Expresar hechos íntimos. {'\n'}2. Dar apoyo, mostrar interés en
                las actividades del otro y respetar su opinión. {'\n'}3.
                Sentirse más feliz, más seguro, más relajado cuando el otro está
                al lado y mostrarlo al otro. {'\n'}4. Hacer regalos, mostrar
                interés y ternura o deseo. {'\n'}5. Tolerar exigencias con el
                fin de mantener la relación. {'\n'}6. Respetar la reacción de la
                otra persona, puede que ella no sienta lo mismo. {'\n'}
                {'\n'}Hacer y recibir comentarios positivos Las relaciones se
                benefician al hacer y expresar comentarios positivos,
                reconocimiento, y gratitud. Hay personas que no saben hacerlo,
                porque tienen pensamientos erróneos como que les da vergüenza o
                se sienten ridículos. {'\n'}Para hacer comentarios positivos, se
                puede seguir las siguientes recomendaciones: {'\n'}1. Ser
                sinceros. {'\n'}2. Ser directos. {'\n'}4. No exagerar. {'\n'}5.
                No dar dobles mensajes. {'\n'}
                {'\n'}¿Cómo responder los comentarios positivos de forma
                asertiva? {'\n'}1. Asume que el comentario ha sido honesto y
                acéptalo. {'\n'}2. No te sientas en la obligación de devolverlo.{' '}
                {'\n'}3. Debes aceptar el comentario que te han hecho. Con que
                digas gracias y sonrías es suficiente.
              </p>
            </div>
          );
        case 7:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">TEMA 7: Asertividad negativa</p>
                {'\n'}
                {'\n'}
                Tenemos también derecho a expresarles a los demás cuando nos
                sentimos mal por algo, o algo no nos gusta. {'\n'}
                {'\n'}Expresar molestia, desagrado y disgusto: Que debemos
                hacer: {'\n'}1. Valorar si vale la pena comunicar el malestar.{' '}
                {'\n'}2. Si es algo realmente importante, expresarlo en el mismo
                momento. {'\n'}3. Evitar sacar las cosas de otro momento. {'\n'}
                4. Cuando sea posible, empezar y acabar la crítica con un tono
                positivo. {'\n'}
                {'\n'}Hacer críticas: Algunas personas tienen una visión
                negativa de la crítica, y es lógico cuando la crítica se hace
                por maldad, por herir u otras razones. {'\n'}Las críticas
                también se deben expresar asertivamente, para dejar claro
                nuestros sentimientos y lo que pretendemos al decirlos. Sólo la
                crítica es positiva, cuando es algo que pueda cambiarse. {'\n'}
                {'\n'}La mejor forma de hacerlo es: {'\n'}1. Decirlos en primera
                persona: yo en lugar de tú. {'\n'}Ejemplo: Me siento/pienso….
                Porque/cuando… y necesitaba decírtelo o me gustaría… {'\n'}
                Recuerda, cuando alguien se comporta de forma irrespetuosa con
                nosotros, tenemos el derecho a decírselo y a pedirle que se
                comporte de una manera más agradable. {'\n'}
                {'\n'}¿Por qué es importante hacer una critica? {'\n'}1. Evita
                los sentimientos de frustración e ira que se acumulan cuando te
                callas. {'\n'}2. Le enseñas al otro lo que te gusta y lo que no,
                eso hace que el otro te conozca. {'\n'}3. Somos honesto y
                dejamos claro lo que no nos gusta que nos hagan {'\n'}4. Le
                hacemos ver que nos importa, por lo que le decimos la verdad{' '}
                {'\n'}5. {'\n'}
                {'\n'}Aumentas la confianza en ti ¿Cómo hacer una crítica?{' '}
                {'\n'}1. Ser concretos y específicos.{'\n'} 2. Evitar
                sobregeneralización (siempre, nunca…) {'\n'}3. Cambiar los
                deberías por me gustaría {'\n'}4. No culpar, amenazar ni ser
                grosero con quien recibe la crítica. {'\n'}6. Elegir bien el
                momento {'\n'}
                {'\n'}Pedir Cambios de Comportamiento: {'\n'}Las peticiones que
                se hagan a otra persona deben ser coherentes y realistas, ya que
                por ejemplo, no se puede pretender que se cambie las
                características personales (por ejemplo, si te gusta que tu
                amigo sea extrovertido, te tienes que aguantar; es una de las
                características y si lo aceptas así, bien, y si no, no es un
                problema suyo, sino tuyo). {'\n'}Una técnica para pedir cambios
                de comportamiento es “Guión DESC”. {'\n'}
                {'\n'}Los pasos de la técnica son los siguientes: {'\n'}1. D.
                Describir la conducta concreta (Cuando haces…)
                {'\n'}2. E. Expresar, siempre en primera persona (me siento,
                creo, pienso…) y explicar (porque/cuando…) {'\n'}3. S. Sugerir
                el cambio (yo te pediría, me gustaría,…) {'\n'}4. C.
                Consecuencias positivas si hay un cambio de comportamiento (Así
                luego podríamos los dos…, evitaríamos…) {'\n'}Recuerda: es una
                petición, no una exigencia.
                {'\n'}
                {'\n'}Afrontar Críticas. Al igual que nosotros los demás tienen
                derecho a mostrar molestia y a pedirnos que cambiemos nuestro
                comportamiento. Sin embargo, a pesar de que se haga de forma
                asertiva, hay personas que no saben aceptar o reaccionar ante la
                crítica. El motivo, generalmente, por el cual respondemos mal a
                la crítica es porque sentimos cosas desagradables. {'\n'}
                {'\n'}Esas emociones generalmente son: sentirse ridículo,
                vergüenza, incómodo, ofensa, ansiedad, enfado. Por eso, cuando
                nos hacen una crítica lo primero que debemos hacer es
                analizarla: {'\n'}a. ¿Esa persona nos conoce bien? {'\n'}b. Es
                una persona razonable. {'\n'}c. Si me lo han dicho varias
                personas. {'\n'}
                {'\n'}Según sea el motivo y el propósito de la crítica, hacemos
                frente a ella, reaccionando y actuando de distintas formas.{' '}
                {'\n'}1. Si cometimos un error, debemos aceptar que lo hemos
                cometido, sin tener que excusarnos por ellos, y sin sentirnos
                culpables, puesto que como seres humanos que somos, tenemos
                derechos a equivocarnos. {'\n'}2. Si el objetivo es ayudarnos,
                para intentar cambiar algo que puede perjudicarnos o que no
                estamos haciendo del todo bien. Si ese es el caso, puedes
                solicitar información concreta sobre lo que no le gusta de ti o
                tu conducta. {'\n'}3. Si el propósito es fastidiar o manipular,
                lo mejor es no molestarse. {'\n'}
                {'\n'}Aquí se puede actuar de varias formas, estas son: {'\n'}a.
                Podemos reconocer serenamente que haya algo de verdad ante
                nuestros críticos, utilizando la frase: Es posible… es verdad….o
                Puedes que tengas razón… {'\n'}b. O puedes comportarte como
                cuando el objetivo es ayudarte, pidiendo información concreta,
                pero lo que buscamos aquí es agotar su crítica y cansarlo.{' '}
                {'\n'}c. Cuando tienes muy claro que no compartes en absoluto la
                crítica, después de escuchar la crítica tranquilamente, puedes
                llegar a la conclusión de que se trata de diferentes opiniones.
                Puedes utilizar la frase: Puede que para ti…. Pero creo que/pero
                para mí…
              </p>
            </div>
          );
        case 8:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  {' '}
                  TEMA 8: Hacer peticiones y decir no
                </p>
                {'\n'}
                {'\n'}
                Dentro de nuestros derechos asertivos está el de pedir lo que
                necesitamos. Bien, esto implica saber reconocer nuestras
                necesidades y deseos y saber hacer nuestras peticiones de forma
                adecuada, esto es, de manera firme pero sin obligar a nadie.
                Podemos hacer 3 tipos de peticiones: {'\n'}1. Que compartan con
                nosotros una actividad agradable o recreativa, por ejemplo: el
                domingo me voy de excursión, ¿te gustaría venir conmigo? {'\n'}
                2. Pedir favores. Por ejemplo: ¿Te importaría prestarme tus
                guantes? {'\n'}3. Pedir cambios de comportamientos que nos
                molestan. Por ejemplo: Por favor, ¿puedes apagar el cigarrillo
                mientras estoy comiendo? {'\n'}
                {'\n'}Hay unas recomendaciones generales para hacer peticiones,
                estas son: {'\n'}- Se amable {'\n'}- Se breve y directo {'\n'}-
                Explica claramente lo que quieres {'\n'}- Repetir y explicar lo
                que pedimos si vemos que no nos entienden. {'\n'}- Cuando te
                digan sí, agradéceselo. {'\n'}- No insistir cuando se nieguen.{' '}
                {'\n'}- No interpretar un “no” como un rechazo personal. {'\n'}-
                Recuerda que el otro tiene derecho a decir no. {'\n'}
                {'\n'}Ten en cuenta; {'\n'}- Una petición no es una exigencia{' '}
                {'\n'}- Es totalmente positivo y hacer peticiones cuando así lo
                necesitamos. {'\n'}- No has de esperar a que los demás
                “adivinen” y lean tus pensamientos. {'\n'}
                {'\n'}B. Rechazar peticiones: {'\n'}Decir NO. Recuerda que uno
                de los derechos asertivos que tenemos todos es decir que no, sin
                sentirnos culpables. Las relaciones requieren de cierta
                negociación y consideración mutua, todo se trata de equilibrar
                las decisiones y llegar a acuerdos como pareja o grupo. Es
                necesario diferenciar tres situaciones a la hora de rechazar
                peticiones: {'\n'}1. Cuando te gustaría, pero no puedes en ese
                momento. Deja claro que ahora no puedes, pero que en otro
                momento te gustaría. Un ejemplo: Me encantaría ir contigo, pero
                sé que tengo que estudiar para el examen de mañana. Si lo dejas
                para mañana podemos ir los dos juntos. {'\n'}2. Cuando la
                petición es injusta y no estás de acuerdo con ella. Es
                importante que digas claramente “no”, y que no pongas excusas o
                justificación. {'\n'}3. Cuando la petición si te parece justa
                pero simplemente no quieres hacerlo. Puedes explicarle tus
                razones de no querer hacerlo, pero recuerda que no tienes que
                justificar tu respuesta. {'\n'}
                {'\n'}Ten en cuenta al rechazar peticiones: {'\n'}1. Tienes
                derecho a decir NO {'\n'}2. Escucha bien lo que te están
                pidiendo antes de decir No {'\n'}3. Di no y explica por qué lo
                dices, para que la otra persona entienda, pero si no entiende no
                busques justificarte. {'\n'}4. Se amable al decir no, refleja
                que lo comprendes pero mantente firme. {'\n'}5. Sugiere alguna
                otra idea, busca alternativas.
              </p>
            </div>
          );
      }
    } else if (module === 4) {
      switch (topic) {
        case 1:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  Tema 1: Qué son y cómo se clasifican{' '}
                </p>
                {'\n'}
                {'\n'}
                Los “Trastornos del Comportamiento Alimentario” son enfermedades
                psicológicas que se observan a través de hábitos inadecuados con
                la comida y que tienen consecuencias biológicas y psicológicas
                en las personas. {'\n'}
                {'\n'}Son capaces de alterar y afectar psicológica, física y
                socialmente a la persona que lo padezca y traer consecuencias
                graves para la salud de todo el organismo y en el funcionamiento
                de nuestro cerebro.{'\n'}
                {'\n'}Los TCA se clasifican en 6 tipos, donde cada uno de ellos
                poseen diversos síntomas y características. {'\n'}
                {'\n'}● Están clasificados en:
                {'\n'}● Anorexia nerviosa {'\n'}● Bulimia nerviosa {'\n'}●
                Trastornos por atracón {'\n'}● Pica
                {'\n'}● Rumiación {'\n'}● Trastorno por evitación de alimentos{' '}
                {'\n'}● Los trastornos no especificados {'\n'}
                {'\n'}
                {'\n'}Los más frecuentes son, la anorexia nerviosa, la bulimia
                nerviosa y los trastornos por atracón; y, los factores
                mayormente relacionados a estas enfermedades son los
                adolescentes y las mujeres. Sin embargo, pueden presentarse en
                niños y adultos.
              </p>
            </div>
          );
        case 2:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  Tema 2: Síntomas, consecuencias y tratamiento{' '}
                </p>
                {'\n'}
                {'\n'}
                Existen indicadores y conductas que nos pueden insinuar cuando
                una persona está padeciendo de un trastorno del comportamiento
                alimentario y el individuo no está teniendo una buena relación
                con la alimentación. {'\n'}
                {'\n'}Por lo que se puede observar que: {'\n'}●La persona deja
                de asistir a eventos sociales porque hay comida {'\n'}●La
                persona busca espacios para dejar de comer {'\n'}●La persona
                después de comer va directo al baño {'\n'}
                {'\n'}Existen cambios bruscos en el peso de la persona y no hay
                una razón aparente {'\n'}●La persona se siente insegura de su
                cuerpo {'\n'}
                ●La persona se siente triste y desanimada
                {'\n'}
                {'\n'}Es por ello, que se puede decir que los principales
                síntomas de los trastornos del Comportamiento alimentario son:{' '}
                {'\n'}● Aislamiento
                {'\n'}● Sentimiento de culpa después de comer {'\n'}● Cambios
                brusco de peso sin razón aparente {'\n'}● Miedo irracional a
                engordar {'\n'}● Obsesión por el peso
                {'\n'}● Métodos compensatorios después de comer (vómito,
                laxantes y ejercicio excesivo) {'\n'}● Miedo a comer {'\n'}●
                Comer en función de lo que quieres pesar {'\n'}
                {'\n'}Alimentos auto prohibidos {'\n'}Las consecuencias de los
                Trastornos del Comportamiento Alimenticios pueden ser físicas y
                psicológicas como daños en el corazón, los huesos, los riñones,
                los músculos, los vellos, como la caída del cabello y los
                dientes. {'\n'}Las consecuencias psicológicas pueden ser
                depresión, baja autoestima, ansiedad, cambios drásticos de
                humor, aislamiento y pensamientos dicotómicos. {'\n'}El
                trastorno del comportamiento alimentario es una trampa para
                lograr sentirnos a gusto con lo que somos. {'\n'}Es por esto muy
                importante que si observamos esto en alguien querido o en ti hay
                solución, es importante pedir ayuda, ya que tiene solución.{' '}
                {'\n'}
                {'\n'}El tratamiento para los TCA está centrado en la
                recuperación de los hábitos alimentarios saludables y la
                recuperación del estado emocional y psicológico. Por lo cual, lo
                ideal es pedir apoyo a nutricionistas y psicólogos
                especializados. {'\n'}
                {'\n'}Dependiendo del estado de salud del paciente, se
                requerirán otros tipos de profesionales como: cardiólogo,
                ginecólogo, internista, endocrino y psiquiatra.
              </p>
            </div>
          );
        case 3:
          return (
            <div className="text-sm">
              <p>
                <p className="font-bold">
                  Tema 3: Qué debe hacer una persona si se identifica, qué debe
                  hacer si alguien lo identifica en el otro
                </p>
                {'\n'}
                {'\n'}
                Los Trastornos del Comportamiento Alimentario en ocasiones
                suelen pasar desapercibidos, ya que actualmente, los estándares
                de belleza hacen que muchos se sientan inseguros de su físico,
                su peso y de sí mismos. {'\n'}
                {'\n'}Sin embargo, cuando estas inseguridades se convierten en
                síntomas físicos y conductuales que afectan psicológica y
                socialmente a la persona, se debe en primer lugar consultar con
                un adulto o especialista. {'\n'}
                {'\n'}Sí eres tú el que padece de un TCA, debes: {'\n'}● Hablar
                con un adulto y comunicarle la preocupación {'\n'}● Buscar ayuda
                con un psicólogo Buscar ayuda con el médico de la familia {'\n'}
                ● Seguir las indicaciones médicas {'\n'}● Valorar más fortalezas
                que debilidades {'\n'}
                {'\n'}Y si un amigo lo sufre debes: {'\n'}● Hablar con la
                persona afectada {'\n'}● Comunicarle la preocupación en torno a
                su salud. {'\n'}● Hablar con un adulto (un profesor, psicólogo
                escolar, padres) y comunicarle la preocupación. {'\n'}●
                Asistirlo en la búsqueda de ayuda profesional de la salud mental{' '}
                {'\n'}● Ayudarlo a seguir las indicaciones médicas hasta volver
                a la normalidad. {'\n'}● Brindarle apoyo y comprensión
              </p>
            </div>
          );
      }
    }
  };

  return (
    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400 p-2">
      {transcription(module, topic)}
    </div>
  );
}

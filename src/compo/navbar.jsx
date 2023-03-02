import Background from "./background";
import Topic from "./topic";

export default function Navbar()
{
     
    return (
        <>
        <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1"></h4>
  {/* <Background/> */}
  
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus fuga, ipsa illum praesentium nihil tempore incidunt nemo cum cupiditate hic, dolorum sapiente ullam excepturi rerum recusandae maiores quasi eligendi.
  Eveniet voluptates quibusdam aperiam tempore, molestias nam, ut unde perspiciatis tempora quasi minima numquam inventore temporibus, provident atque natus quae fugiat cumque! Eveniet aspernatur impedit quis ipsam nesciunt, odio architecto?
  Tempora ducimus aspernatur ad quidem voluptates itaque repellat! Magni aperiam, voluptates omnis voluptatem quidem, sunt molestiae laboriosam cum quae, doloribus doloremque pariatur accusantium architecto odio consequatur! Quasi placeat quo omnis.
  Quas at praesentium ex facere odit nam! Quia quis culpa illum ab id ut fugiat enim fuga! Vero ducimus officiis saepe suscipit dolore ut esse laborum, praesentium vitae dicta eius?
  Odio deserunt atque consequuntur minima ipsam temporibus dolore nesciunt modi aspernatur eos officia deleniti fuga ipsa delectus, reprehenderit veritatis esse recusandae quos expedita nulla. Beatae architecto vitae nostrum cumque vero?
  Expedita architecto officiis, corporis, asperiores quaerat consequatur laborum molestias dolorem eligendi magni, aliquid doloribus dolorum! Facilis atque maxime odio dicta sit veniam odit at saepe? Exercitationem nesciunt neque perferendis doloribus.
  Vel, repudiandae et. Tempora accusantium delectus quasi quidem autem quia provident illo repellendus rem similique impedit repellat, maiores eaque blanditiis nesciunt debitis eos eius quis excepturi? Perferendis, placeat exercitationem! Explicabo?
  Ipsa architecto error veniam cum, autem reprehenderit accusantium corrupti, dolor dolorum, soluta explicabo voluptatem nihil officiis dolorem recusandae facere perspiciatis minus consequatur culpa aspernatur numquam. Accusantium ut voluptatibus autem repellat.
  Iusto molestiae odit maxime tenetur eligendi numquam autem doloribus maiores obcaecati vitae vero impedit quisquam nihil quis nulla, quia ullam ex quibusdam. Voluptate rem officiis vel temporibus accusantium. Sit, ratione?
  Cum ut eum reiciendis ducimus voluptates, dolores aspernatur vero numquam quod et inventore quas veritatis molestiae facere omnis. Vel voluptas, iure mollitia aliquid itaque quis tempore porro facilis magni blanditiis.</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus omnis officiis nam rem dignissimos est! Vel eius officia sit. Amet nostrum perferendis corrupti illo eaque ipsam atque voluptatum sapiente!
  Aut officiis recusandae ex, magni ut sapiente. Architecto iure esse recusandae, nulla totam, dolorum perferendis, eos hic illo quis eligendi. In officia odio, amet provident quasi ducimus eligendi repudiandae cumque.
  Autem eius asperiores voluptates saepe esse quis dolor, sed tenetur quam suscipit, dicta laborum facere obcaecati quod qui dolores, iste iure? Amet sit itaque qui tempora et exercitationem, ducimus voluptatibus!
  Natus non, perferendis nemo distinctio delectus illo. Minus ipsam, modi aperiam possimus blanditiis, officia tempora eaque doloremque error debitis nobis, animi similique alias perspiciatis laudantium dolores placeat libero ab suscipit!
  Illum explicabo ducimus dolor! Tempora minima perferendis vero accusantium architecto nulla dolorem iste ab magni. Vel, necessitatibus assumenda officiis, nisi excepturi, dolorum ut sed laudantium soluta non quidem ea vero!
  Voluptate corporis iure delectus labore eos rerum autem fugit quo quis ea, iste laudantium totam beatae soluta consequuntur atque cupiditate. Id accusamus illum neque aliquam corrupti ea facere obcaecati nulla.
  Inventore, ab. Laboriosam, veniam facilis ad amet minima veritatis ea consequatur dolorum exercitationem quod eos quasi. Expedita nulla officia ducimus. Quaerat, architecto labore! Officia sequi sint inventore, tempora qui eum.
  Exercitationem, minus doloribus temporibus cumque totam quisquam sit reiciendis hic accusantium inventore aperiam, quasi fugiat numquam suscipit culpa dicta placeat maiores. Assumenda error ratione quis. Quidem quo aspernatur dolor blanditiis?
  Asperiores nemo nisi fuga laudantium vero ex, quidem, consequatur eum, minima similique omnis optio labore incidunt dolor quos? Itaque quasi esse consequatur eaque optio fuga. Dolor tempora doloremque maiores nobis.
  Suscipit consequatur, aliquam cum dolor perferendis eligendi ad dignissimos delectus nisi totam quis assumenda necessitatibus soluta cumque. Facere, debitis labore ea expedita non natus accusantium. Quae animi officiis ipsum dolores.</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p><Topic/></p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>

        </>
    )
}
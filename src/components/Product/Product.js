import React from 'react'

const Product = ({name, price, img}) => {
  return (
    <div className ="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsam magni neque sint velit illum necessitatibus dolorem temporibus quam. Sapiente repudiandae consequatur alias iusto illum magnam, debitis dolores deleniti fugiat quidem, distinctio quo nemo quia reiciendis at vel quis atque nesciunt nulla sequi ad saepe laborum. Eos, corporis! Illo placeat modi fuga dicta alias corporis dolores atque consequuntur nesciunt? Unde eius obcaecati illo nostrum nulla aspernatur dolore cum quaerat officia necessitatibus modi enim explicabo itaque fugiat consequatur, quibusdam tempora cumque id, saepe nam. Velit nemo, consequatur enim laborum cumque, a error, aliquam ullam corporis debitis similique. Nam perferendis maiores delectus hic laboriosam quos sunt esse, rem temporibus, deleniti modi mollitia ut illum! Et atque molestias laudantium quidem minima ipsam consequuntur perspiciatis facilis neque placeat! Ducimus minima officia maiores magnam ipsam inventore hic, dolore deserunt necessitatibus architecto molestias sequi tenetur, sed provident. Aperiam eos ipsa porro adipisci accusamus culpa, iusto in saepe quod nulla temporibus obcaecati. Neque rerum doloremque enim sint. Eius quasi sequi animi aspernatur esse totam ratione illum vitae minus atque? Vitae, sunt. Facere recusandae dicta, ratione iste sit quam quia asperiores molestias quidem optio perspiciatis mollitia quis neque quas? Sequi recusandae deserunt architecto debitis velit vero eveniet dolorum.</p>
    </div>
  )
}

export default Product
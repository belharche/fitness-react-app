import React from "react";
import { SelectedPageEnum } from "../../shared/SelectedPageEnum.ts";
import { motion } from "framer-motion";
import H1Text from "../../shared/H1Text.tsx";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";


interface Props {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

function Contact({setSelectedPage}: Props) {

  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }

  return(
    <section
      id="contactus"
      className="gap-16 py-20 md:h-full mx-auto w-full"
    >
      <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPageEnum.ContactUs)}
        className="w-5/6 py-10 mx-[10%]"
      >
        <div className="md:w-3/4">
          <H1Text children="JOIN NOW TO GET IN SHAPE" />
          <p
            className="text-sm mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et excepturi saepe. Numquam incidunt 
            qui eos eveniet illo minima officiis quo laboriosam omnis fugit quam ratione natus labore, exercitationem in.
          </p>
        </div>
          <motion.div
          className="py-8 md:flex gap-10 justify-between"
        >
          <form
            className="md:mt-10"
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.cobrahimshopify22@gmail.com"
            method="POST"
          >
            <input
              className="w-full rounded-lg bg-primary-300 px-5 py-2 placeholder-white outline-none mx:mt-5"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 50
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "this field is required."}
                {errors.name.type === "maxLength" && "Max length is 50 char."}
              </p>
            )}

            <input
              className="w-full rounded-lg bg-primary-300 px-5 placeholder-white py-2 outline-none mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "this field is required."}
              </p>
            )}

            <textarea
              className="w-full rounded-lg bg-primary-300 px-5 placeholder-white py-8 outline-none mt-5"
              rows={4}
              cols={40}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "this field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="w-[250px] mt-5 rounded-lg px-20 py-3 transition duration-500 bg-secondary-500 hover:text-white hover:bg-primary-500"
            >
              Submit
            </button>
          </form>
          <div className="mt-10">
            <img src={ContactUsPageGraphic} alt="Contact Us Page Graphic" />
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Contact;
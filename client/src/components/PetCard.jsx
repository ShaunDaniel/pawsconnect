const PetCard = (props) => {
    return(
        <div className="max-w-xs rounded overflow-hidden bg-white shadow-xl">
          <img
            className="w-full"
            src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
            alt=""
            srcset=""
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-2xl">Sheru</h3>
              <div className="rounded-full bg-amber-400 px-3 py-0.5">4y 5mo</div>
            </div>

            <div className="description">A playful brown male indie</div>
            
          </div>
          <div className="h-content bg-amber-400">
            <div className="contact bg-amber-200 px-6 font-body font-bold">Contact - </div>
            <div className="contact-name text-right px-6">Shaun Daniel</div>
            <div className="contact-num text-right px-6">+91 9425515243</div>
            </div>
        </div>
    )
}

export default PetCard
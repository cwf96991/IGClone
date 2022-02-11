import Base from "./Base";
import { faker } from "@faker-js/faker";
const Index = () => {
  return (
    <Base>
      <div className="max-w-[620px]  my-8 ">
        <div className="border border-[#dbdbdb] flex ">
          {[...Array(100)].map((item, key) => {
            return (
              <div class="avatar" key={key}>
                <div class="rounded-full w-[56px] h-[56px]">
                  <img src={faker.image.avatar()} className="" />
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </Base>
  );
};
export default Index;

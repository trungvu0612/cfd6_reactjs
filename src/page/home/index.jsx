import { useEffect, useState } from "react";
import courseApi from "../../Servises/courseApi";
import Action from "./component/Action";
import Banner from "./component/Banner";
import CourseList from "./component/CourseList";

import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";

export default function HomePage() {
  let [list, setList] = useState({
    offline: [],
    onlined: [],
  });

  useEffect(() => {
    courseApi.list().then((res) => {
      setList(res);
      console.log(res);
    });
  }, []);

  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList {...list} />
      <Different />
      {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}

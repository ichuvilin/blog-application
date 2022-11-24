package com.chuvilin.controller;


import com.chuvilin.entity.NewsEntity;
import com.chuvilin.service.impl.NewsServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()
@CrossOrigin(origins = "*")
public class NewsController {

    private final NewsServiceImpl newsServiceImpl;

    public NewsController(NewsServiceImpl newsServiceImpl) {
        this.newsServiceImpl = newsServiceImpl;
    }

    @PostMapping()
    public ResponseEntity<?> createNews(@RequestBody NewsEntity news) {
        try {
            return ResponseEntity.ok(newsServiceImpl.createNews(news));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Не получилось");
        }
    }

    @GetMapping()
    public ResponseEntity<?> allNews() {
        try {
            return ResponseEntity.ok(newsServiceImpl.getAllNews());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Exception");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> oneNews(@PathVariable(required = false) Long id) {
        try {
            return ResponseEntity.ok(newsServiceImpl.getOneNews(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Exception");
        }
    }

}
